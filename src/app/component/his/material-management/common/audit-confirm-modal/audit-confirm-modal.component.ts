import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-audit-confirm-modal',
  templateUrl: './audit-confirm-modal.component.html',
  styleUrls: ['./audit-confirm-modal.component.scss', '../../../../common/form.scss', '../../../../common/modal.scss']
})
export class AuditConfirmModalComponent implements OnInit {
  @Input() auditConfirmIsVisible: boolean;
  @Input() isPrint: boolean = false;
  @Input() isPass: boolean = false;
  @Input() isBack: boolean = false;
  @Input() isSelectedBack: boolean = false;
  @Output() closeConfirm: EventEmitter<boolean> = new EventEmitter;

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
