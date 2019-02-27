import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-material-price',
  templateUrl: './material-price.component.html',
  styleUrls: ['./material-price.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialPriceComponent implements OnInit {
  /** 弹出框 */
  addIsVisible: Boolean = false;
  /** 分页对象 */
  page = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** 构造form表单对象 */
  conditionForm = this.fb.group({
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
  dataSet = [
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '2',
      zbje: '30',
      rkzl: '-22',
      lsje: '李密',
      rkr: '张',
      zt: '1'
    },
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '2',
      zbje: '30',
      rkzl: '-22',
      lsje: '李密',
      rkr: '张',
      zt: '2'
    },
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '2',
      zbje: '30',
      rkzl: '-22',
      lsje: '李密',
      rkr: '张',
      zt: '3'
    },
    {
      key: '1',
      djh: '2233222',
      rkrq: '2018.10.11',
      ghs: '2',
      zbje: '30',
      rkzl: '-22',
      lsje: '李密',
      rkr: '张',
      zt: '4'
    }
  ];
  /** 表单提交时 */
  onSubmit() {
    console.warn(this.conditionForm.value)
  }
  /** 查询表格List数据 */
  getTableList(): void {
    this.page
  }
  /** 弹出新增修改调价弹出框 */
  showPriceAddModal(): void {
    this.addIsVisible = true;
  }

  closeAddModal(isVisible: Boolean): void {
    this.addIsVisible = isVisible;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
