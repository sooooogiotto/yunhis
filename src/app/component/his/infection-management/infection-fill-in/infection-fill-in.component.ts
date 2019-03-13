import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-infection-fill-in',
  templateUrl: './infection-fill-in.component.html',
  styleUrls: ['./infection-fill-in.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class InfectionFillInComponent implements OnInit {

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
  recordIsVisible: boolean = false;
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
  dataSet: object = [{
    billno: 1,
    id: 1
  }];
  dataSet1: object = [{
    billno: 1
  }]
  supplierList: [];
  infectionId: string;
  /** 表单提交时 */
  findAudit(page: object): void {

  }
  getMaterialInCount(): void {
  }
  /** 表单提交时 */
  findAudited(page: object): void {

  }
  getMaterialInCounted(): void {
  }
  /** 弹出审核弹出框 */
  showRecordCard(data: object): void {
    this.infectionId = data['id']
    this.recordIsVisible = true;
  }
  /** 关闭审核弹出框 */
  closeRecordCard(isVisible: boolean): void {
    this.recordIsVisible = false
  }


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.page['pagenum'] = 10000;

  }

}
