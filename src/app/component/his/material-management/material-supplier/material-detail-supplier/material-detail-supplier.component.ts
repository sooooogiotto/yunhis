import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-detail-supplier',
  templateUrl: './material-detail-supplier.component.html',
  styleUrls: ['./material-detail-supplier.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialDetailSupplierComponent implements OnInit {

  @Input() detailIsVisible: boolean;
  @Input() supplier: object;
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
}
