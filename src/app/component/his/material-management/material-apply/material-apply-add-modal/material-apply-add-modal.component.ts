import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-apply-add-modal',
  templateUrl: './material-apply-add-modal.component.html',
  styleUrls: ['./material-apply-add-modal.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialApplyAddModalComponent implements OnInit {
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
