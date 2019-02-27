import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-receive',
  templateUrl: './material-receive.component.html',
  styleUrls: ['./material-receive.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialReceiveComponent implements OnInit {
  /** 分页对象 */
  page: Object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** 弹出框开关 */
  detailIsVisible: Boolean = false;
  /** 构造form表单对象 */
  receiveConditionForm: FormGroup = this.fb.group({
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
  receiveedConditionForm: FormGroup = this.fb.group({
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
  dataSet: Object = [
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
  dataSet1: Object = [
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
  findreceive(): void {
    console.warn(this.receiveConditionForm.value)
  }
  /** 表单提交时 */
  findreceiveed(): void {
    console.warn(this.receiveedConditionForm.value)
  }
  /** 查询表格List数据 */
  getTableList(): void {
    this.page
  }
  /** 弹出审核弹出框 */
  showDetailDialog(): void {
    this.detailIsVisible = true;
  }
  /** 关闭审核弹出框 */
  closeDetailModal(isVisible: Boolean): void {
    this.detailIsVisible = isVisible
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
