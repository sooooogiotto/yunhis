import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MaterialInService } from './material-in.service';
import { MaterialSupplierService } from '../material-supplier/material-supplier.service';
import { UtilsService } from 'src/app/utils.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-material-in',
  templateUrl: './material-in.component.html',
  styleUrls: ['./material-in.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialInComponent implements OnInit {
  materialIn: object;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pagestart: 0,
    pagenum: 10,
    pageCount: 0
  }
  /** 控制模态窗属性 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
    starttime: [''],
    endtime: [''],
    sid: [''],
    godownstate: [''],
    status: 1
  })
  supplierList: []
  /** 静态数据 */
  dataSet: object[];
  /** 查询表格List数据 */
  getMaterialList(page: object): void {
    this.miService.getMaterialInList(new HttpParams({ fromObject: Object.assign(this.conditionForm.value, Object.assign(this.page, page)) })
    ).subscribe(data => {
      if (data['data']) {
        this.getMaterialInCount();
        data['data'] = (data['data'].filter((item: object) => item['status'] !== '0'))
        this.dataSet = data['data'];
      } else {
        if (this.page['pagestart'] !== 0) {
          --this.page['curPage'];
          this.page['pagestart'] = this.page['pagestart'] - +this.page['pagenum'];
          this.getMaterialList(this.page);
        } else {
          this.dataSet = [];
        }
      }
    })
  }
  getMaterialInCount(): void {
    this.miService.getMaterialInCount(new HttpParams({ fromObject: this.conditionForm.value })
    ).subscribe(data => this.page['pageCount'] = data['count'])
  }
  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.materialIn = {};
    this.materialIn['invamounttotal'] = 0;
    this.materialIn['billno'] = '20190305';
    //this.materialIn['date'] = this.utilsService.getDate();
    this.materialIn['date'] = new Date();

    this.addIsVisible = true;
  }
  /** 关闭新入库弹出框 */
  closeAddModal(flag: boolean): void {
    this.addIsVisible = false;
    
  }
  /** 弹出详情弹出框 */
  showDetailModal(): void {
    this.detailIsVisible = true;
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  constructor(
    private fb: FormBuilder,
    private miService: MaterialInService,
    private msService: MaterialSupplierService,
    private utilsService: UtilsService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.page['pagenum'] = 10000;
    this.msService.getSupplierList(new HttpParams({ fromObject: Object.assign(this.page) })
    ).subscribe(data => {
      this.supplierList = data['data']
      this.page['pagenum'] = 10;
      this.getMaterialList(this.page);
    })
  }
}
