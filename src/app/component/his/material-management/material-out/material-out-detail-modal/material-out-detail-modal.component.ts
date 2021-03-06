import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-material-out-detail-modal',
  templateUrl: './material-out-detail-modal.component.html',
  styleUrls: ['./material-out-detail-modal.component.scss', '../../material-in/material-in-add-modal/material-in-add-modal.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialOutDetailModalComponent implements OnInit {
  @Input() detailIsVisible: boolean;
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;

  dataSet: object = [
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
