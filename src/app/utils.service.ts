import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /** 获取当前时间组装成字符串(不带符号) */
  getDate(): string {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1 < 10 ? date.getMonth() : date.getMonth() + 1).toString();
    let day = (date.getDate() < 10 ? date.getDate() : date.getDate()).toString();
    return year + month + day
  }
  /** 根据传入date对象返回带符号的时间字符串 */
  formatDate(date: any, type: string): string {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    if (type === 'date') {
      return year + '-' + month + '-' + day
    } else {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
    }
  }
  //** 不带时分秒的formatDate() */
  dateToLocalString(date: any): string {
    return date !== '' ? date !== null && this.formatDate(new Date(date), 'date') : '';
    //return date != '' ? date = new Date(date).toLocaleDateString() : '';
  }
  /** 带时分秒的formatDate() */
  dateTimeToLocalString(date: any): string {
    return date !== '' ? date !== null && this.formatDate(new Date(date), 'dateTime') : '';
    //return date != '' ? date = new Date(date).toLocaleDateString() : '';
  }
  /** js计算精确度 */
  calcSum(f: number, digit: number): number {
    let m: number = Math.pow(10, digit);
    return parseInt((f * m).toString(), 10) / m;
  }
}
