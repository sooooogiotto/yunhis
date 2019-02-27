import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-material-supplier',
  templateUrl: './material-supplier.component.html',
  styleUrls: ['./material-supplier.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialSupplierComponent implements OnInit {
  /** 分页对象 */
  page: object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** 控制模态窗属性 */
  addIsVisible: boolean = false;
  detailIsVisible: boolean = false;
  /** 构造form表单对象 */
  conditionForm: FormGroup = this.fb.group({
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
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeDetailModal(isVisible: boolean): void {
    this.detailIsVisible = isVisible
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
