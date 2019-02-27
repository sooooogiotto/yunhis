import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-add-dictionary',
  templateUrl: './material-add-dictionary.component.html',
  styleUrls: ['./material-add-dictionary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddDictionaryComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;
  /** 分页对象 */
  page: object = {
    curPage: 1,
    pageCount: 50,
    pageSize: 10
  }
  /** confirm */
  checkIsVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  handleCancel(): void {
    this.addIsVisible = false;
    this.closeAddModal.emit(this.addIsVisible);
  }
  showConfirm(flag: boolean): void {
  }

  closeConfirm(isVisible: boolean): void {
    this.checkIsVisible = isVisible;
  }


}
