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

  formatDate(date: any): string {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    let day = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
    return year + '-' + month + '-' + day
  }

  dateToLocalString(date: any): string {
    return date !== '' && date !== null ? this.formatDate(date) : '';
    //return date != '' ? date = new Date(date).toLocaleDateString() : '';
  }
}
