import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MaterialSupplierService } from '../../material-supplier/material-supplier.service';
import { HttpParams } from '@angular/common/http';
import { MaterialInService } from '../material-in.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-material-in-add-modal',
  templateUrl: './material-in-add-modal.component.html',
  styleUrls: ['./material-in-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialInAddModalComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() materialIn: object;
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;

  dataSet: object = {
    contactpeople: "string",
    items: []
  }

  supplier: object[];

  constructor(private msService: MaterialSupplierService,
    private miService: MaterialInService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.addMaterial();
    this.msService.getSupplierList(new HttpParams({ fromObject: {} })
    ).subscribe(data => this.supplier = data['data'])
  }
  handleCancel(flag: boolean): void {
    if (flag) { }
    this.miService.postmaterialIn(this.materialIn
    ).subscribe(data => {
      if (data && data === '3') {
        this.miService.postmaterialInList(this.dataSet).subscribe(data => {
          if (data) {
            this.message.success('操作成功');
            this.addIsVisible = false;
            this.closeAddModal.emit(flag);
          }
        })
      } else {
        this.message.error('操作失败');
      }
    })
  }
  addMaterial(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.dataSet['items'].push({
      invno: "",
      drugmaterialid: "",
      invamount: "",
      mspec: "",
      munit: "",
      mcount: "",
      bidtotal: "",
      bidprice: "",
      retailtotal: "",
      retailprice: "",
      expiretime: "",
      createtime: "",
      remark: "",
      id: "",
      batchno: ""
    });
  }
  deleteMaterial(data: object, e: MouseEvent) {
    e.preventDefault();
    let index = this.dataSet['items'].indexOf(data);
    this.dataSet['items'].splice(index, 1);
  }
}
