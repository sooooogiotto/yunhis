import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-check-audit-modal',
  templateUrl: './material-check-audit-modal.component.html',
  styleUrls: ['./material-check-audit-modal.component.scss', '../../material-check/material-check-add-modal/material-check-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialCheckAuditModalComponent implements OnInit {
  @Input() isVisible: Boolean;
  @Input() isAudit: Boolean;
  @Output() closeModal: EventEmitter<Boolean> = new EventEmitter;
  /** 分页对象 */
  page: Object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** 控制弹出框 */
  auditConfirmIsVisible: Boolean = false;
  isPass: Boolean = false;
  isPrint: Boolean = false;
  isBack: Boolean = false;
  /** 表格数据 */
  dataSet: Object = [
    {
      'fph': '22323232'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.isVisible = false;
    this.closeModal.emit(this.isVisible);
  }
  print(): void {
    window.print();
  }

  pass(): void {
    this.isPrint = true;
    this.isPass = true;
    this.auditConfirmIsVisible = true;
  }
  back(): void {
    this.isBack = true;
    this.auditConfirmIsVisible = true;
  }
  closeConfirm(isVisible: Boolean): void {
    this.auditConfirmIsVisible = isVisible;
    this.isPass = isVisible;
    this.isPrint = isVisible;
    this.isBack = isVisible;
  }
}
