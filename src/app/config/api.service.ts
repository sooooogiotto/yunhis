import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //public ip = 'http://' + window.location.host;
  public config = {
    ip: 'http://114.215.237.162:10560',
    appid: '7'
  }

  public materialUrl = {
    "drugmaterial-list": this.config.ip + "/service/560/drugmaterial/list"
  }
  constructor() { }
}
