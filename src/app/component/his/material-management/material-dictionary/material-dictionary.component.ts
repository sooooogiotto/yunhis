import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialDictionaryService } from './material-dictionary.service';
import { MaterialManufactureronaryService } from '../material-manufactureronary/material-manufactureronary.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-material-dictionary',
  templateUrl: './material-dictionary.component.html',
  providers: [MaterialDictionaryService],
  styleUrls: ['./material-dictionary.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialDictionaryComponent implements OnInit {
  /** 数据对象 */
  drugmaterial: object;
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
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
    status: ['1'],
    state: [''],
    mid: [''],
    name: ['']
  })
  stype: '5';
  filter: '1';
  /** list数据 */
  dataSet: object[] = []
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.addIsVisible = true;
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
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  /** 获取材料字典数据 */
  getdrugmaterial(): void {
    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(
      data => {
        if (data['data']) {
          data['data'].map((item: object) => item['mname'] = this.manufactureronary.find(m => item['manufacturerid'] === m['id'])['name'])
          this.dataSet = data['data'];
          this.page['pageCount'] = this.dataSet.length;
        }
      }
    )
  }
  /** 删除(逻辑) */
  putDrugmaterial(data: object): void {
    this.mdService.putDrugmaterial(data
    ).subscribe(res => {
      this.dataSet.filter(item => item['id'] == data['id'])
    })
  }

  constructor(
    private fb: FormBuilder,
    private mdService: MaterialDictionaryService,
    private mmService: MaterialManufactureronaryService
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
