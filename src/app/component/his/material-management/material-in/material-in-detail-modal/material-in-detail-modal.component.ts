import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
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
  @Input() printHTML: any;
  params: object;
  printCSS: string[];
  printStyle: string;
  printBtnBoolean = true;
  constructor(
    private miService: MaterialInService
  ) {
    this.printStyle =
      `
      * {
        font-size:12px;
      }
      .title{
        text-align:center;
        font-weight: bold;
        font-size: 16px;
      }
      table {
        width: 100%;
        color: #333;
      }
      .baseTable tr td {
        text-align: left;
        width: 50%;
      }
      
      .detailTable {
        border-collapse: collapse;
      }
      .detailTable tr th {
        background-color: rgba(242, 242, 242, 1);
      }
      .detailTable tr th,
      .detailTable tr td{
        border: 1px solid rgba(228, 228, 228, 1);
        text-align:left;
        padding: 8px 0 8px 10px;
        font-weight:400;
      }
      .baseTable,
      .detailTable,
      .personTable{
        margin-top:20px;
      }
    `
    //   `
    //   th, td {
    //     color: black !important;
    //  }
    //  `;
  }
  seconds() { return 0; }
  ngOnInit() {
  }

  export() {
    this.miService.getmaterialInExcel(new HttpParams({
      fromObject: {
        status: '1',
        geid: this.materialIn['id']
      }
    })).subscribe(data => {
      window.open(data['data']);
    })

  }
  printComplete() {
    this.printBtnBoolean = true;
  }
  beforePrint() {
    this.printBtnBoolean = false;
  }

  handleCancel(): void {
    this.detailIsVisible = false;
    this.closeDetailModal.emit(this.detailIsVisible);
  }
}
