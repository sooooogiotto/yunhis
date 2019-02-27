import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-detail-manufactureronary',
  templateUrl: './material-detail-manufactureronary.component.html',
  styleUrls: ['./material-detail-manufactureronary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialDetailManufactureronaryComponent implements OnInit {

  @Input() detailIsVisible: boolean;
  @Output() closeDetailModal: EventEmitter<boolean> = new EventEmitter;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** confirm */
  isCheck: boolean = false;
  checkIsVisible: boolean = false;

  dataSet: object = [
    {
      'fph': '22323232'
    },
    {
      'fph': '22323232'
    },
    {
      'fph': '22323232'
    },
    {
      'fph': '22323232'
    },
    {
      'fph': '22323232'
    },
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
  showConfirm(flag: boolean): void {
    this.isCheck = flag;
    this.checkIsVisible = true;
  }

  closeConfirm(isVisible: boolean): void {
    this.isCheck = isVisible;
    this.checkIsVisible = isVisible;
  }

}
