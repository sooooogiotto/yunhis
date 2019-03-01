import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialDictionaryService } from './material-dictionary.service';
import { MaterialManufactureronaryService } from '../material-manufactureronary/material-manufactureronary.service';
import { HttpParams } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-material-dictionary',
  templateUrl: './material-dictionary.component.html',
  providers: [MaterialDictionaryService, MaterialManufactureronaryService],
  styleUrls: ['./material-dictionary.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialDictionaryComponent implements OnInit {
  /** 数据对象 */
  drugmaterial: object;
  drugmaterialClone: object;
  manufactureronary: object[];
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 0,
    pageSize: 10
  }
  /** 控制模态窗 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  deleteIsVisible: boolean = false;
  isEdit: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
    status: ['1'],
    state: [''],
    mid: [''],
    name: ['']
  })
  /** list数据 */
  dataSet: object[] = []
  /** 弹出新入库弹出框 */
  showAddModal(drugmaterial: object): void {
    this.drugmaterialClone = Object.assign({}, drugmaterial ? drugmaterial : {});
    this.addIsVisible = true;
  }
  /** 关闭新入库弹出框 */
  closeAddModal(flag: boolean): void {
    this.addIsVisible = false
    if (flag) this.mdService.putDrugmaterial(this.drugmaterialClone).subscribe((res: any) => {
      0 < +res['count'] && this.message.create('success', '删除成功！');
      this.getdrugmaterial();
    })
  }
  /** 弹出详情弹出框 */
  showDetailModal(drugmaterial: object): void {
    //查询详情接口
    this.mdService.getDrugmaterial(new HttpParams({ fromObject: { "id": drugmaterial['id'] } })
    ).subscribe(data => {
      this.detailIsVisible = true;
      data['data'][0]['mname'] = this.manufactureronary.find(m => data['data'][0]['manufacturerid'] === m['id'])['name']
      this.drugmaterial = data['data'][0];
    })
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  /** 显示删除弹出框 */
  showDeleteConfirm(data: object): void {
    this.deleteIsVisible = true;
    this.drugmaterial = data;
  }
  /** 关闭删除弹出框，并判断是否执行删除方法 close delete confirm window also judge is execute delete() */
  isDelete(flag: boolean): void {
    this.deleteIsVisible = false;
    if (flag) this.putDrugmaterial(this.drugmaterial)
  }
  /** 获取材料字典数据 */
  getdrugmaterial(): void {
    // this.conditionForm.patchValue({ status: '0' })

    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => {
        if (data['data']) {
          data['data'] = (data['data'].filter((item: object) => item['status'] !== '0'))
          data['data'].map((item: object) => item['mname'] = this.manufactureronary.find(m => item['manufacturerid'] === m['id'])['name'])
          this.dataSet = data['data'];
          this.page['pageCount'] = this.dataSet.length;
        } else {
          this.dataSet = [];
        }
      }
    )
  }
  /** 删除(逻辑) */
  putDrugmaterial(data: object): void {
    //data['status'] = '1';
    this.mdService.putDrugmaterial(data
    ).subscribe(res => {
      if (0 < +res['count']) {
        this.message.create('success', '删除成功！');
      }
    })
  }

  constructor(
    private fb: FormBuilder,
    private mdService: MaterialDictionaryService,
    private mmService: MaterialManufactureronaryService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {

    this.mmService.getManufacturerList(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => {
        this.manufactureronary = data['data']
        this.getdrugmaterial();
      }
    )
  }

}
