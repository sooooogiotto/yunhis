import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-material-check',
  templateUrl: './material-check.component.html',
  styleUrls: ['./material-check.component.scss', '../../../common/form.scss', '../../../common/table.scss', '../../../common/page.scss']
})
export class MaterialCheckComponent implements OnInit {
  /** 分页对象 */
  page: Object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** 控制模态窗属性 */
  addIsVisible: Boolean = false;
  isCheckVisible: Boolean = false;
  isVisible: Boolean = false;
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
  showAddModal(isVisible: Boolean): void {
    this.addIsVisible = !isVisible
    this.isCheckVisible = isVisible
  }
  /** 弹出新增盘点确认框 */
  showCheckConfirm(): void {
    this.isCheckVisible = true;
  }
  /** 弹出详情弹出框 */
  showDetailModal(): void {
    this.isVisible = true;
  }
  /** 关闭新入库弹出框 */
  closeAddModal(isVisible: Boolean): void {
    this.addIsVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeModal(isVisible: Boolean): void {
    this.isVisible = isVisible
  }
  /** 关闭详情弹出框 */
  closeCheckConfirm(isVisible: Boolean): void {
    this.isCheckVisible = isVisible
  }
  constructor(private fb: FormBuilder, private modalService: NzModalService) { }

  ngOnInit(): void {
  }

}
