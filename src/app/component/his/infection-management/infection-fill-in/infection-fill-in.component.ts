import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { HttpParams, HttpClient } from '@angular/common/http';
import { InfectionFillInService } from './infection-fill-in.service';
@Component({
  selector: 'app-infection-fill-in',
  templateUrl: './infection-fill-in.component.html',
  styleUrls: ['./infection-fill-in.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss'],
  providers: [InfectionFillInService]
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
  detailIsVisible: boolean = false;
  /** 构造form表单对象 */
  auditConditionForm: FormGroup = this.fb.group({
    beginDate: [""],
    endDate: [""],
    flag: '1'
  })
  auditedConditionForm: FormGroup = this.fb.group({
    starttime: [''],
    endtime: [''],
    sid: [''],
    godownstate: 2,
    status: 1
  })
  /** 静态数据 */
  dataSet: object[] = [];
  dataSet1: object = [{
    billno: 1
  }]
  supplierList: [];
  infectionId: string;

  constructor(
    private fb: FormBuilder,
    private IniService: InfectionFillInService
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
      .titledesc {
        width: 50%;
        margin: 0 auto 20px auto;
        text-align: center;
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
      .modalTitle {
        margin: 5px 0 5px 0;
      }
      table {
        width: 100%;
        color: #333;
      }
      span {
        color: #999;
        margin-right: 3px;
      }
      td {
        text-align: left;
      }
      .firstTable td {
        width: 25%;
      }
      .secondTable td {
        width: 50%;
      }
      .thirdTable td {
        width:33%;
      }
    `
  }
  /** 表单提交时 */
  getQueryReport(page?: object): void {
    this.IniService.getQueryReport(new HttpParams({
      fromObject: Object.assign(this.auditConditionForm.value, Object.assign(this.page, page))
    })
    ).subscribe(data => {
      console.log(data);
      this.dataSet = data['data']['records'];
    })
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
  /** 弹出查看框 */
  showDetail(): void {
    this.detailIsVisible = true;
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
  /** 关闭详情弹出框 */
  closeDetail(flag: boolean): void {
    this.detailIsVisible = flag;
  }
  /** 关闭确认框 */
  closeConfirm(flag: boolean): void {
    this.confirmIsVisible = false;
    if (flag) {

    }
  }


  printComplete() {
    this.printBtnBoolean = true;
  }
  beforePrint() {
    this.printBtnBoolean = false;
  }

  ngOnInit() {
    this.getQueryReport()
  }
}
