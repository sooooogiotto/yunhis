import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-check-add-modal-confirm',
  templateUrl: './material-check-add-modal-confirm.component.html',
  styleUrls: ['./material-check-add-modal-confirm.component.scss', '../../../../../common/form.scss']
})
export class MaterialCheckAddModalConfirmComponent implements OnInit {
  @Input() isCheck: boolean;
  @Input() checkIsVisible: boolean;

  @Output() closeConfirm: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.isCheck = false;
    this.checkIsVisible = false;
    this.closeConfirm.emit(false);
  }
}
