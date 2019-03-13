import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MaterialInService } from '../material-in.service';
import { NzMessageService } from 'ng-zorro-antd';
import { MaterialDictionaryService } from '../../material-dictionary/material-dictionary.service';
import { UtilsService } from 'src/app/utils.service';
import { Observable } from 'rxjs';
import { ValidatorService } from 'src/app/validator.service';

@Component({
  selector: 'app-material-in-add-modal',
  templateUrl: './material-in-add-modal.component.html',
  styleUrls: ['./material-in-add-modal.component.scss', '../../../../common/modal.scss',  '../../../../common/form.scss']
})
export class MaterialInAddModalComponent implements OnInit {
  // new
  @Input() materialInId: string;
  // new
  @Input() addIsVisible: boolean;
  @Input() supplierList: object[];
  @Output() closeAddModal: EventEmitter<boolean> = new EventEmitter;

  precision: number = 2;
  controlObject: object = {
    billno: "",
    depid: "",
    godowntime: new Date(),
    godowntype: "1",
    advice: "",
    supplierid: "",
    invamounttotal: ""
  }

  controlArray: Array<any> = [];
  materialDictionaryList: object[];
  inValidObj: object;

  constructor(
    private miService: MaterialInService,
    private message: NzMessageService,
    private mdService: MaterialDictionaryService,
    private util: UtilsService,
    private validator: ValidatorService
  ) {
    this.inValidObj = {};
  }

  ngOnInit() {
    this.addMaterial();
    this.getMaterialDictionaryList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.materialInId) {
      const currentValue = changes.materialInId.currentValue;
      if (currentValue && currentValue !== 'none' && currentValue !== 'add') {
        this.miService.getMaterialIn(new HttpParams({ fromObject: { id: currentValue } })
        ).subscribe(data => {
          if (data['data']) {
            this.controlObject = data['data'][0];
            this.controlArray = this.controlObject['details'] || []
            console.log(this.controlArray);
          }
        })
      } else if (currentValue && currentValue !== 'none' && currentValue === 'add') {
        this.controlObject = {
          billno: new Date().toLocaleDateString(),
          godowntime: new Date().toLocaleDateString(),
          invamounttotal: 0,
          bidtotal: 0,
          retailtotal: 0
        }
      }
    }
  }
  onFocus(key: number, value: string) {
    debugger
    if (this.inValidObj['key'] === key && this.inValidObj['value'] === value) {
      this.inValidObj = {};
    }
  }

  onChangeMaterial(id: string, data: object): void {
    const obj = this.materialDictionaryList.find(m => m['id'] === id);
    if (obj) {
      data['munit'] = obj['unit']
      data['mspec'] = obj['specifications']
    }
  }
  onCalc(): void {
    this.controlObject['bidtotal'] = 0;
    this.controlObject['retailtotal'] = 0;
    this.controlObject['invamounttotal'] = 0;
    this.controlArray.map(c => {
      c['bidtotal'] = this.util.calcSum(+c['bidprice'] * +c['mcount'], this.precision);
      c['retailtotal'] = this.util.calcSum(+c['retailprice'] * +c['mcount'], this.precision);
      this.controlObject['bidtotal'] = this.util.calcSum(+this.controlObject['bidtotal'] + c['bidtotal'], this.precision);;
      this.controlObject['retailtotal'] = this.util.calcSum(+this.controlObject['retailtotal'] + c['retailtotal'], this.precision);;
      this.controlObject['invamounttotal'] = this.util.calcSum(+this.controlObject['invamounttotal'] + c['invamount'], this.precision);;
    })
  }
  handleCancel(flag: boolean): void {
    console.log(this.controlObject);
    if (flag) {
      this.inValidObj = this.validator.validateRequired(this.controlObject, [
        "supplierid"
      ])
      if (this.inValidObj['valid'] === true) {
        this.inValidObj = this.validator.validateRequired(this.controlArray, [
          "invno",
          "invamount",
          "drugmaterialid",
          "mcount",
          "bidprice",
          "retailprice",
          "expiretime",
          "batchno"
        ]);
        if (this.inValidObj['valid'] == true) {
          this.postOrputmaterialIn(Object.assign(this.controlObject, { id: this.materialInId }), this.materialInId).subscribe(data => {
            if (data) {
              let tempObj = {};
              tempObj['godownentryid'] = data['id'] || this.materialInId;
              tempObj['items'] = this.controlArray
              tempObj['items'].map((item: object) => {
                item['expiretime'] = this.util.dateToLocalString(item['expiretime'])
                delete item['createtime'];
              })
              this.postMaterialInList(tempObj).subscribe(data => {
                if (data) {
                  this.message.success('操作成功');
                  this.initMaterial();
                  this.closeAddModal.emit(flag);
                }
              })
            }
          })
        }
      }
    } else {
      this.initMaterial();
      this.closeAddModal.emit(flag);
    }
  }
  addMaterial(): void {
    this.controlArray.push({
      invno: ``,
      drugmaterialid: ``,
      invamount: ``,
      mspec: ``,
      munit: ``,
      mcount: 0,
      bidprice: 0,
      bidtotal: 0,
      retailprice: 0,
      retailtotal: 0,
      expiretime: '',
      remark: ``,
      id: ``,
      batchno: ``
    });
  }

  initMaterial(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    this.controlObject = {
      billno: "",
      depid: "",
      godowntime: new Date(),
      godowntype: "1",
      advice: "",
      supplierid: "",
      invamounttotal: ""
    }
    this.controlArray = [];
    this.materialInId = 'none';
    this.addMaterial();
    this.addIsVisible = false;
  }
  deleteMaterial(data: object, e: MouseEvent) {
    e.preventDefault();
    let index = this.controlArray.indexOf(data);
    this.controlArray.splice(index, 1);
    this.onCalc();
  }
  getMaterialDictionaryList() {
    this.mdService.getDrugmaterialList(new HttpParams({ fromObject: {} })
    ).subscribe(data => {
      this.materialDictionaryList = data['data']
    })
  }
  postOrputmaterialIn(param: object, id: string): Observable<any> {
    if (id !== 'add') {
      return this.miService.putMaterialIn(param)
    } else {
      return this.miService.postmaterialIn(param)
    }
  }
  postMaterialInList(param: object): Observable<any> {
    return this.miService.postmaterialInList(param)
  }
}
