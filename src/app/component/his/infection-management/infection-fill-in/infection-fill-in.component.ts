import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-infection-fill-in',
  templateUrl: './infection-fill-in.component.html',
  styleUrls: ['./infection-fill-in.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class InfectionFillInComponent implements OnInit {
  printBtnBoolean: boolean;
  printStyle: string;
  printCSS: string[];
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
  /**  */
  isInfectionSecond: boolean = false;
  isInfectionHiv: boolean = false;
  /** Confirm内容 */
  confirmContent: string = "确定要提交吗?"
  /** 弹出框开关 */
  recordIsVisible: boolean = false;
  bIsVisible: boolean = false;
  hivIsVisible: boolean = false;
  confirmIsVisible: boolean = false;
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
  closeCard(isVisible: object): void {
    this.recordIsVisible = false;
    this.bIsVisible = false;
    this.hivIsVisible = false;
    if (isVisible['submit']) {
      this.confirmIsVisible = true;
      this.recordIsVisible = !!isVisible['recordIsVisible'];
      this.bIsVisible = !!isVisible['bIsVisible'];
      this.hivIsVisible = !!isVisible['hivIsVisible'];
    } else if (isVisible['recordIsVisible']) {
      this.recordIsVisible = isVisible['recordIsVisible']
    } else if (isVisible['bIsVisible']) {
      this.bIsVisible = isVisible['bIsVisible']
    } else if (isVisible['hivIsVisible']) {
      this.hivIsVisible = isVisible['hivIsVisible']
    }
    this.isInfectionHiv = isVisible['isInfectionHiv']
    this.isInfectionSecond = isVisible['isInfectionSecond']
  }

  closeConfirm(flag: boolean): void {
    this.confirmIsVisible = false;
    if (flag) {

    }
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.printStyle = this.printStyle =
      `
      * {
        font-size:12px;
      }
      .title{
        text-align:center;
        font-weight: bold;
        font-size: 16px;
      }
      .titleTab{
        background: #2881d4;
        width: 4px;
        height: 1em;
        border-radius: 1rem;
        display: inline-block;
        margin-right: 4px;
        position: relative;
        top: 2px;
      }
      table {
        width: 100%;
        color: #333;
      }
      .baseTable tr td {
        text-align: left;
        width: 50%;
      }
      
      .detailTable {
        border-collapse: collapse;
      }
      .detailTable tr th {
        background-color: rgba(242, 242, 242, 1);
      }
      .detailTable tr th,
      .detailTable tr td{
        border: 1px solid rgba(228, 228, 228, 1);
        text-align:left;
        padding: 8px 0 8px 10px;
        font-weight:400;
      }
      .baseTable,
      .detailTable,
      .personTable{
        margin-top:20px;
      }
    `
  }

  printComplete() {
    this.printBtnBoolean = true;
  }
  beforePrint() {
    this.printBtnBoolean = false;
  }

  ngOnInit() {
    this.page['pagenum'] = 10000;

  }

}
