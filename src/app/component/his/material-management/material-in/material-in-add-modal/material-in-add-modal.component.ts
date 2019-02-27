import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-in-add-modal',
  templateUrl: './material-in-add-modal.component.html',
  styleUrls: ['./material-in-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialInAddModalComponent implements OnInit {
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
