import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';
@Component({
  selector: 'app-material-add-manufactureronary',
  templateUrl: './material-add-manufactureronary.component.html',
  styleUrls: ['./material-add-manufactureronary.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddManufactureronaryComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() manufactureronary: object;
  @Input() isEdit: boolean;

  @Output() closeModal: EventEmitter<boolean> = new EventEmitter;

  p: string[];
  c: object;
  a: object;
  constructor(private sdService: StaticDataService) {
    this.p = [];
    this.c = {};
    this.a = {};
  }

  ngOnInit() {
    this.sdService.getPUA().subscribe(
      data => {
        this.p = data['p']
        this.c = data['c']
        this.a = data['a']
      }
    )
  }
  handleCancel(flag: boolean): void {
    this.addIsVisible = false;
    this.manufactureronary['companyaddr'] = this.manufactureronary['province'] + this.manufactureronary['city'] + this.manufactureronary['area'] + this.manufactureronary['street'];
    this.closeModal.emit(flag);
  }

  pChange(value: string) {
    this.manufactureronary['city'] = this.c[value][0];
    this.cChange(this.manufactureronary['city']);
  }

  cChange(value: string) {
    this.manufactureronary['area'] = this.a[value][0];
  }
}
