import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-add-dictionary',
  templateUrl: './material-add-dictionary.component.html',
  styleUrls: ['./material-add-dictionary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddDictionaryComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() drugmaterialClone: object;
  @Input() manufactureronary: object[];

  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }
  handleCancel(flag:boolean): void {
    this.addIsVisible = false;
    this.closeAddModal.emit(flag);
  }
}
