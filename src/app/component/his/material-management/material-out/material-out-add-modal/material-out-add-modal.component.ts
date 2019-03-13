import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-out-add-modal',
  templateUrl: './material-out-add-modal.component.html',
  styleUrls: ['./material-out-add-modal.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialOutAddModalComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;

  dataSet: object = [
    {
      'fph': '22323232'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.addIsVisible = false;
    this.closeAddModal.emit(this.addIsVisible);
  }
}
