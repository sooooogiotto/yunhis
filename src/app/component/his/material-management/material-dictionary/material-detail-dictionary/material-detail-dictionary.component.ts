import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-detail-dictionary',
  templateUrl: './material-detail-dictionary.component.html',
  styleUrls: ['./material-detail-dictionary.component.scss', '../material-add-dictionary/material-add-dictionary.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialDetailDictionaryComponent implements OnInit {
  @Input() detailIsVisible: boolean;
  @Input() drugmaterial: object;
  @Input() manufactureronary: object[];
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
}
