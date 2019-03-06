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
  //drugmaterialClone: object;
  manufactureronary: Array<object>;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pagestart: 0,
    pagenum: 10000,
    pageCount: 0
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

  /** 获取材料字典List数据 */
  getdrugmaterial(page: object): void {
    for (let i in page) {
      this.page[i] = page[i]
    }
    // this.conditionForm.patchValue({ status: '0' })
    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: Object.assign(this.conditionForm.value, this.page) })
    ).subscribe(
      data => {
        if (data['data']) {
          this.getdrugmaterialCount();
          this.dataSet = data['data'];
          //this.page['pageCount'] = this.dataSet.length;
        } else {
          if (this.page['pagestart'] !== 0) {
            --this.page['curPage'];
            this.page['pagestart'] = this.page['pagestart'] - +this.page['pagenum'];
            this.getdrugmaterial(this.page);
          } else {
            this.dataSet = [];
          }
        }
      }
    )
  }
  getdrugmaterialCount(): void {
    this.mdService.getDrugmaterialCount(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => (this.page['pageCount'] = data['count'])
    )
  }
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.drugmaterial = {};
    this.isEdit = false;
    this.addIsVisible = true;
  }
  /** 弹出修改弹出框 */
  showUpdateModal(drugmaterial: object): void {
    this.isEdit = true
    this.drugmaterial = drugmaterial ? drugmaterial : {};
    this.addIsVisible = true;
    this.mdService.getDrugmaterial(new HttpParams({ fromObject: { "id": drugmaterial['id'] } })
    ).subscribe(data => {
      this.drugmaterial = data['data'][0]
    })
  }
  /** 关闭新入库弹出框 */
  closeModal(flag: boolean): void {
    this.addIsVisible = false
    /**是否点击保存 */
    if (flag) {
      /**是否点击修改 */
      if (this.isEdit) {
        this.mdService.putDrugmaterial(this.drugmaterial).subscribe((res: any) => {
          /**后台是否有修改条数 */
          if (0 < +res['count']) {
            this.message.create('success', '操作成功！');
            this.getdrugmaterial(this.page);
          } else {
            this.message.create('error', '操作失败！');
          }
        })
      } else {
        this.mdService.postdrugmaterial(this.drugmaterial).subscribe((res: any) => {
          /**后台是否有新增条数 */
          if (res) {
            this.message.create('success', '操作成功！');
            /**添加到当前的list数据中 */
            this.getdrugmaterial(this.page);
          } else {
            this.message.create('error', '操作失败！');
          }
        })
      }
    }
  }
  /** 弹出详情弹出框 */
  showDetailModal(drugmaterial: object): void {
    //查询详情接口
    this.mdService.getDrugmaterial(new HttpParams({ fromObject: { "id": drugmaterial['id'] } })
    ).subscribe(data => {
      this.detailIsVisible = true;
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
  /** 删除(逻辑) */
  putDrugmaterial(data: object): void {
    data['status'] = '0';
    this.mdService.putDrugmaterial(data
    ).subscribe(res => {
      if (0 < +res['count']) {
        this.message.create('success', '删除成功！');
        this.getdrugmaterial(this.page);
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
    this.mmService.getManufactureronaryList(new HttpParams({ fromObject: Object.assign(this.conditionForm.value, this.page) })
    ).subscribe(
      data => {
        /** 查询生厂商 */
        this.manufactureronary = data['data']
        /** 手动设置查询行数 */
        this.page['pagenum'] = 10;
        this.getdrugmaterial(this.page);
      }
    )
  }
}
