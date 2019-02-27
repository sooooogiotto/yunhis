import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-material-out',
  templateUrl: './material-out.component.html',
  styleUrls: ['./material-out.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialOutComponent implements OnInit {
  /** 分页对象 */
  page = {
    curPage: 1,
    pageCount: 50,
    pageSize: 10
  }
  /** 控制模态窗属性 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  outIsVisible: boolean = false;
  /** 构造form表单对象 */
  conditionForm = this.fb.group({
    ckrqs: [''],
    ckrqe: [''],
    lqks: [''],
    zt: ['']
  })
  /** 静态数据 */
  dataSet = [
    {
      key: '1',
      djh: '2233222',
      ckrq: '2018.10.11',
      lqks: '心内科',
      lqr: '张',
      ckr: '张'
    },
    {
      key: '1',
      djh: '2233222',
      ckrq: '2018.10.11',
      lqks: '心内科',
      lqr: '张',
      ckr: '张'
    },
    {
      key: '1',
      djh: '2233222',
      ckrq: '2018.10.11',
      lqks: '心内科',
      lqr: '张',
      ckr: '张'
    },
    {
      key: '1',
      djh: '2233222',
      ckrq: '2018.10.11',
      lqks: '心内科',
      lqr: '张',
      ckr: '张'
    },
    {
      key: '1',
      djh: '2233222',
      ckrq: '2018.10.11',
      lqks: '心内科',
      lqr: '张',
      ckr: '张'
    },
  ];
  /** 表单提交时 */
  onSubmit(): void {
    console.warn(this.conditionForm.value)
  }
  /** 查询表格List数据 */
  getTableList(): void {
    this.page
  }

  /** 弹出新入库弹出框 */
  showAddModal(): void {
    this.addIsVisible = true;
  }
  /** 弹出详情弹出框 */
  showDetailModal(): void {
    this.detailIsVisible = true;
  }
  /** 弹出申领出库弹出框 */
  showOutOfStockModal(): void {
    this.outIsVisible = true;
  }
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  /** 关闭申领出库弹出框 */
  closeOutModal(isVisible: boolean): void {
    this.outIsVisible = isVisible
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
