import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StaticDataService } from 'src/app/static-data.service';
@Component({
  selector: 'app-material-add-supplier',
  templateUrl: './material-add-supplier.component.html',
  styleUrls: ['./material-add-supplier.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialAddSupplierComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() supplier: object;
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
    this.supplier['companyaddr'] = this.supplier['province'] + this.supplier['city'] + this.supplier['area'] + this.supplier['street'];
    this.closeModal.emit(flag);
  }

  pChange(value: string) {
    this.supplier['city'] = this.c[value][0];
    this.cChange(this.supplier['city']);
  }

  cChange(value: string) {
    this.supplier['area'] = this.a[value][0];
  }
}
