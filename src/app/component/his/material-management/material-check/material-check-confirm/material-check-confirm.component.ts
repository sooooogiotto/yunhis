import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-material-check-confirm',
  templateUrl: './material-check-confirm.component.html',
  styleUrls: ['./material-check-confirm.component.scss']
})
export class MaterialCheckConfirmComponent implements OnInit {
  @Input() isCheckVisible: boolean

  @Output() showAddModal: EventEmitter<boolean> = new EventEmitter
  @Output() closeCheckConfirm: EventEmitter<boolean> = new EventEmitter

  constructor() { }

  ngOnInit() {
  }
  emitShowAddModal(): void {
    this.isCheckVisible = false;
    this.showAddModal.emit(this.isCheckVisible);
  }
  handleCancel(): void {
    this.isCheckVisible = false;
    this.closeCheckConfirm.emit(this.isCheckVisible);
  }
}
