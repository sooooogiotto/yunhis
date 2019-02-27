import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-in-detail-modal',
  templateUrl: './material-in-detail-modal.component.html',
  styleUrls: ['./material-in-detail-modal.component.scss', '../material-in-add-modal/material-in-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialInDetailModalComponent implements OnInit {
  @Input() detailIsVisible: Boolean;
  @Output() closeDetailModal: EventEmitter<Boolean> = new EventEmitter;

  dataSet: Object = [
    {
      'fph': '22323232'
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
  print(): void {
    window.print();
  }
}
