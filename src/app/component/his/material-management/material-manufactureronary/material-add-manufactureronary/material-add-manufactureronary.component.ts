import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-add-manufactureronary',
  templateUrl: './material-add-manufactureronary.component.html',
  styleUrls: ['./material-add-manufactureronary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddManufactureronaryComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 50,
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
    this.addIsVisible = false;
    this.closeAddModal.emit(this.addIsVisible);
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
