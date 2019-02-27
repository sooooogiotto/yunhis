import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-price-add-modal',
  templateUrl: './material-price-add-modal.component.html',
  styleUrls: ['./material-price-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialPriceAddModalComponent implements OnInit {
  @Input() addIsVisible: Boolean;
  @Output() closeAddModal: EventEmitter<Boolean> = new EventEmitter;

  dataSet: Object = [
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
