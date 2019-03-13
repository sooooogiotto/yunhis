import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-detail-manufactureronary',
  templateUrl: './material-detail-manufactureronary.component.html',
  styleUrls: ['./material-detail-manufactureronary.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialDetailManufactureronaryComponent implements OnInit {

  @Input() detailIsVisible: boolean;
  @Input() manufactureronary: object;
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
}
