import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-detail-supplier',
  templateUrl: './material-detail-supplier.component.html',
  styleUrls: ['./material-detail-supplier.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialDetailSupplierComponent implements OnInit {

  @Input() detailIsVisible: Boolean;
  @Output() closeDetailModal: EventEmitter<Boolean> = new EventEmitter;
  /** 分页对象 */
  page: Object = {
    curPage: 1,
    totalPage: 50,
    pageSize: 10
  }
  /** confirm */
  isCheck: Boolean = false;
  checkIsVisible: Boolean = false;

  dataSet: Object = [
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
  showConfirm(flag: Boolean): void {
    this.isCheck = flag;
    this.checkIsVisible = true;
  }

  closeConfirm(isVisible: Boolean): void {
    this.isCheck = isVisible;
    this.checkIsVisible = isVisible;
  }

}
