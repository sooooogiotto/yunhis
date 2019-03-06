import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MaterialInService } from '../material-in.service';
import { NzMessageService } from 'ng-zorro-antd';
import { MaterialDictionaryService } from '../../material-dictionary/material-dictionary.service';
import { UtilsService } from 'src/app/utils.service';
@Component({
  selector: 'app-material-in-add-modal',
  templateUrl: './material-in-add-modal.component.html',
  styleUrls: ['./material-in-add-modal.component.scss', '../../../../common/modal.scss', '../../../../common/inline-form.scss', '../../../../common/form.scss']
})
export class MaterialInAddModalComponent implements OnInit {
  @Input() addIsVisible: boolean;
  @Input() materialIn: object;
  @Input() supplierList: object[];
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;

  dataSet: object = {
    godownentryid: "",
    items: []
  }
  materialInTotal: object;
  materialDictionaryList: object[];

  constructor(
    private miService: MaterialInService,
    private message: NzMessageService,
    private mdService: MaterialDictionaryService,
    private util: UtilsService
  ) {
    this.materialInTotal = {};
  }

  ngOnInit() {
    this.addMaterial();
    this.getMaterialDictionaryList();
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    if (this.dataSet) {
      this.dataSet['bidtotal'] = 0;
      this.dataSet['retailtotal'] = 0;
      this.dataSet['invamounttotal'] = 0;
      this.dataSet['items'].map((item: object) => {
        //const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
        //if (((!isNaN(+bid) && reg.test(bid)) || bid === '' || bid === '-') && ((!isNaN(+retail) && reg.test(retail)) || retail === '' || retail === '-')) {
        item['bidtotal'] = +item['bidprice'] * +item['mcount']
        item['retailtotal'] = +item['retailprice'] * +item['mcount']
        //}
        this.dataSet['bidtotal'] += +item['bidtotal'];
        this.dataSet['retailtotal'] += +item['retailtotal'];
        this.dataSet['invamounttotal'] += +item['invamount'];
      })
    }
  }
  handleCancel(flag: boolean): void {
    if (flag) {
      this.miService.postmaterialIn(this.materialIn
      ).subscribe(data => {
        if (data['id']) {
          this.dataSet['godownentryid'] = data['id'];
          this.dataSet['items'].map((item: object) => item['expiretime'] = this.util.dateToLocalString(item['expiretime']))
          this.miService.postmaterialInList(this.dataSet).subscribe(data => {
            if (data) {
              this.dataSet = {
                godownentryid: "",
                items: []
              };
              this.addMaterial();
              this.message.success('操作成功');
              this.addIsVisible = false;
              this.closeAddModal.emit(flag);
            }
          })
        } else {
          this.message.error('操作失败');
        }
      })
    } else {
      this.addIsVisible = false;
      this.closeAddModal.emit(flag);
    }
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
  getMaterialDictionaryList() {
    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: {} })
    ).subscribe(data => {
      this.materialDictionaryList = data['data']
    })
  }
  onChangeMaterial(id: string, data: object): void {
    console.log(event);
    const obj = this.materialDictionaryList.find(m => m['id'] === id);
    data['munit'] = obj['unit']
    data['mspec'] = obj['specifications']
  }
}
