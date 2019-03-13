import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-apply-detail-modal',
  templateUrl: './material-apply-detail-modal.component.html',
  styleUrls: ['./material-apply-detail-modal.component.scss', '../material-apply-add-modal/material-apply-add-modal.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss', '../../../../common/table.scss']
})
export class MaterialApplyDetailModalComponent implements OnInit {
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
