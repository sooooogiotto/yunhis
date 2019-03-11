import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
export const inValildateDictionary = {
  name: '姓名',
  sex: '性别',
  age: '年龄',
  invno: '发票号',
  invamount: '发票额',
  drugmaterialid: '材料名称',
  mcount: '数量',
  bidprice: '中标单价',
  retailprice: '零售单价',
  expiretime: '有效期',
  batchno: '生产批号',
  supplierid: '供应商'
}
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  validateRequired(data: any, validateKey: Array<string>): object {
    let arr = [];
    let inValidObj = {
      valid: true
    };
    !data.length ? arr.push(data) : arr = data

    arr.forEach((c: object, idx: number) => {
      if (inValidObj.valid) {
        for (let i = 0; i < validateKey.length; i++) {
          if (inValidObj.valid) {
            if (c[validateKey[i]] === undefined || c[validateKey[i]] === '' || c[validateKey[i]] === null) {
              inValidObj['key'] = idx;
              inValidObj['value'] = validateKey[i];
              inValidObj.valid = false;
              i = validateKey.length - 1;
            }
          }
        }
      }
    })
    if (!inValidObj.valid) {
      this.message.error(inValildateDictionary[inValidObj['value']] + '字段不能为空');
    }
    return inValidObj;
  }
  constructor(
    private message: NzMessageService
  ) { }
}
