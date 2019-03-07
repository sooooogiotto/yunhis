import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { MaterialInService } from '../material-in/material-in.service';
import { MaterialSupplierService } from '../material-supplier/material-supplier.service';
import { HttpParams, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-material-in-audit',
  templateUrl: './material-in-audit.component.html',
  styleUrls: ['./material-in-audit.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialInAuditComponent implements OnInit {
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 0,
    pagestart: 0,
    pagenum: 10
  }
  paged: object = {
    curPage: 1,
    pageCount: 0,
    pagestart: 0,
    pagenum: 10
  }
  /** 弹出框开关 */
  auditIsVisible: boolean = false;
  /** 构造form表单对象 */
  auditConditionForm: FormGroup = this.fb.group({
    sid: [''],
    godownstate: 0,
    status: 1
  })
  auditedConditionForm: FormGroup = this.fb.group({
    starttime: [''],
    endtime: [''],
    sid: [''],
    godownstate: 2,
    status: 1
  })
  /** 静态数据 */
  dataSet: object = [];
  dataSet1: object = []
  supplierList: []
  /** 表单提交时 */
  findAudit(page: object): void {
    this.miService.getMaterialInList(new HttpParams({ fromObject: Object.assign(this.auditConditionForm.value, Object.assign(this.page, page)) })
    ).subscribe(data=>{
      if (data['data']) {
        this.getMaterialInCount();
        data['data'] = (data['data'].filter((item: object) => item['status'] !== '0'))
        this.dataSet = data['data'];
      } else {
        if (this.page['pagestart'] !== 0) {
          --this.page['curPage'];
          this.page['pagestart'] = this.page['pagestart'] - +this.page['pagenum'];
          this.findAudit(this.page);
        } else {
          this.dataSet = [];
        }
      }
    })
  }
  getMaterialInCount(): void {
    this.miService.getMaterialInCount(new HttpParams({ fromObject: this.auditConditionForm.value })
    ).subscribe(data => this.page['pageCount'] = data['count'])
  }
  /** 表单提交时 */
  findAudited(page: object): void {
    this.miService.getMaterialInList(new HttpParams({ fromObject: Object.assign(this.auditedConditionForm.value, Object.assign(this.paged, page)) })
    ).subscribe(data=>{
      if (data['data']) {
        this.getMaterialInCounted();
        data['data'] = (data['data'].filter((item: object) => item['status'] !== '0'))
        this.dataSet1 = data['data'];
      } else {
        if (this.paged['pagestart'] !== 0) {
          --this.paged['curPage'];
          this.paged['pagestart'] = this.paged['pagestart'] - +this.paged['pagenum'];
          this.findAudit(this.paged);
        } else {
          this.dataSet1 = [];
        }
      }
    })
  }
  getMaterialInCounted(): void {
    this.miService.getMaterialInCount(new HttpParams({ fromObject: this.auditedConditionForm.value })
    ).subscribe(data => this.paged['pageCount'] = data['count'])
  }
  /** 弹出审核弹出框 */
  showAuditDialog(): void {
    this.auditIsVisible = true;
  }
  /** 关闭审核弹出框 */
  closeModal(isVisible: boolean): void {
    this.auditIsVisible = isVisible
  }


  constructor(
    private fb: FormBuilder,
    private miService:MaterialInService,
    private msService: MaterialSupplierService
    ) { }

  ngOnInit() {
    this.page['pagenum']=10000;
    this.msService.getSupplierList(new HttpParams({ fromObject: Object.assign(this.page) })
    ).subscribe(data => {
      this.supplierList = data['data']
      this.page['pagenum'] = 10;
       this.findAudit(this.page);
       this.findAudited(this.paged);
    })
  }
}
