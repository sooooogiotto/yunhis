import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-in-audit-modal',
  templateUrl: './material-in-audit-modal.component.html',
  styleUrls: [
    './material-in-audit-modal.component.scss',
    '../../material-in/material-in-add-modal/material-in-add-modal.component.scss',
    '../../material-in/material-in-detail-modal/material-in-detail-modal.component.scss',
    '../../../../common/modal.scss',
    '../../../../common/inline-form.scss',
    '../../../../common/form.scss'
  ]
})
export class MaterialInAuditModalComponent implements OnInit {
  @Input() auditIsVisible: Boolean;
  @Output() closeModal: EventEmitter<Boolean> = new EventEmitter;

  auditConfirmIsVisible: Boolean = false;

  /** 控制弹出框 */
  isPass: Boolean = false;
  isPrint: Boolean = false;
  isBack: Boolean = false;

  dataSet: Object = [
    {
      'fph': '22323232'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.auditIsVisible = false;
    this.closeModal.emit(this.auditIsVisible);
  }
  closeConfirm(isVisible: Boolean): void {
    this.auditConfirmIsVisible = isVisible;
    this.isPass = isVisible;
    this.isPrint = isVisible;
    this.isBack = isVisible;
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

}
