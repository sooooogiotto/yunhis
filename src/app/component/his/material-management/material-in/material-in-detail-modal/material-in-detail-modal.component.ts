import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterialInService } from '../material-in.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-material-in-detail-modal',
  templateUrl: './material-in-detail-modal.component.html',
  styleUrls: ['./material-in-detail-modal.component.scss', '../material-in-add-modal/material-in-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialInDetailModalComponent implements OnInit {
  @Input() detailIsVisible: boolean;
  @Input() materialIn: object;
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;

  constructor(
    private miService: MaterialInService
  ) { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
}
