import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss', '../../../../common/modal.scss']
})

export class DeleteConfirmComponent implements OnInit {
  @Input() deleteIsVisible: boolean;
  @Output() isDelete = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  handleCancel(flag: boolean) {
    this.isDelete.emit(flag);
    this.deleteIsVisible = false;
  }
}
