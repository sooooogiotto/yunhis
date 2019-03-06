import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';

@Component({
  selector: 'app-material-add-dictionary',
  templateUrl: './material-add-dictionary.component.html',
  styleUrls: ['./material-add-dictionary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddDictionaryComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() drugmaterial: object;
  @Input() manufactureronary: object[];
  @Input() isEdit: boolean;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter;

  unitArr: string[];

  constructor(private sdService: StaticDataService) { }

  ngOnInit() {
    this.sdService.getUnitData().subscribe(data => this.unitArr = data)
  }
  handleCancel(flag: boolean): void {
    this.addIsVisible = false;
    this.closeModal.emit(flag);
  }
}
