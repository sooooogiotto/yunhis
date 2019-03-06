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
}
