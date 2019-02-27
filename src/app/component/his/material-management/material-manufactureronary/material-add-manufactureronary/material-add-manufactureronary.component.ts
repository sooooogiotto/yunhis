import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-add-manufactureronary',
  templateUrl: './material-add-manufactureronary.component.html',
  styleUrls: ['./material-add-manufactureronary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddManufactureronaryComponent implements OnInit {
  @Input() addIsVisible: Boolean;
  @Output() closeAddModal: EventEmitter<Boolean> = new EventEmitter;
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
    this.addIsVisible = false;
    this.closeAddModal.emit(this.addIsVisible);
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
