import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getDate(): string {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1 < 10 ? date.getMonth() : date.getMonth() + 1).toString();
    let day = (date.getDate() < 10 ? date.getDate() : date.getDate()).toString();
    return year + month + day
  }

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

  dateToLocalString(date: any): string {
    return date !== '' ? date !== null && this.formatDate(new Date(date), 'date') : '';
    //return date != '' ? date = new Date(date).toLocaleDateString() : '';
  }
  dateTimeToLocalString(date: any): string {
    return date !== '' ? date !== null && this.formatDate(new Date(date), 'dateTime') : '';
    //return date != '' ? date = new Date(date).toLocaleDateString() : '';
  }
}
