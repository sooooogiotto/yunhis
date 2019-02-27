import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audit-confirm-modal',
  templateUrl: './audit-confirm-modal.component.html',
  styleUrls: ['./audit-confirm-modal.component.scss', '../../../../common/form.scss']
})
export class AuditConfirmModalComponent implements OnInit {
  @Input() auditConfirmIsVisible: Boolean;
  @Input() isPrint: Boolean = false;
  @Input() isPass: Boolean = false;
  @Input() isBack: Boolean = false;
  @Input() isSelectedBack: Boolean = false;
  @Output() closeConfirm: EventEmitter<Object> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.auditConfirmIsVisible = false;
    this.isPrint = false;
    this.isPass = false;
    this.isBack = false;
    this.isSelectedBack = false;
    this.closeConfirm.emit(false);
  }
}
