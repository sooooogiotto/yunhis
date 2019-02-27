import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-check-audit',
  templateUrl: './material-check-audit.component.html',
  styleUrls: ['./material-check-audit.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialCheckAuditComponent implements OnInit {
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 50,
    pageSize: 10
  }
  /** 弹出框开关 */
  isVisible: boolean = false;
  isAudit: boolean = false;
  /** 构造form表单对象 */
  auditConditionForm: FormGroup = this.fb.group({
    rkrqs: [''],
    rkrqe: [''],
    ghs: [''],
    zt: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })
  auditedConditionForm: FormGroup = this.fb.group({
    rkrqs: [''],
    rkrqe: [''],
    ghs: [''],
    zt: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  })
  /** 静态数据 */
  dataSet: object = [
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '中大医疗器械',
      zbje: '3000',
      rkzl: '新增入库',
      lsje: '3200',
      rkr: '张',
      zt: '1'
    },
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '中大医疗器械',
      zbje: '3000',
      rkzl: '新增入库',
      lsje: '3200',
      rkr: '张',
      zt: '2'
    }
  ];
  dataSet1: object = [
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '中大医疗器械',
      zbje: '3000',
      rkzl: '新增入库',
      lsje: '3200',
      rkr: '张',
      zt: '3'
    },
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '中大医疗器械',
      zbje: '3000',
      rkzl: '新增入库',
      lsje: '3200',
      rkr: '张',
      zt: '4'
    }
  ]
  /** 表单提交时 */
  findAudit(): void {
    console.warn(this.auditConditionForm.value)
  }
  /** 表单提交时 */
  findAudited(): void {
    console.warn(this.auditedConditionForm.value)
  }
  /** 查询表格List数据 */
  getTableList(): void {
    this.page
  }
  /** 弹出审核弹出框 */
  showAuditDialog(flag): void {
    this.isAudit = flag;
    this.isVisible = true;
  }
  /** 关闭审核弹出框 */
  closeModal(isVisible: boolean): void {
    this.isVisible = isVisible
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
