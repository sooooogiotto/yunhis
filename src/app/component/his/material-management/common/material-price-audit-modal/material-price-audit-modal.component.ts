import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-price-audit-modal',
  templateUrl: './material-price-audit-modal.component.html',
  styleUrls: ['./material-price-audit-modal.component.scss', '../../material-check/material-check-add-modal/material-check-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialPriceAuditModalComponent implements OnInit {
  @Input() isVisible: boolean = false
  @Input() isAudit: boolean = false
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter

  auditConfirmIsVisible: boolean = false;
  isPass: boolean = false;
  isPrint: boolean = false;
  isBack: boolean = false;
  /** 表格数据 */
  dataSet: object = [
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
  closeConfirm(isVisible: boolean): void {
    this.auditConfirmIsVisible = isVisible;
    this.isPass = isVisible;
    this.isPrint = isVisible;
    this.isBack = isVisible;
  }
}
