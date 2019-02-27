import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //public ip = 'http://' + window.location.host;
  public config = {
    appid: '18',
    site: '1',
    token: 'MTU1MTE2NDY0OXxOd3dBTkRVelFVTkRTMWxFU1VSTFRWVlFOMU5JTmtsUVJUTlVVVlZZTlZSS05sWTFTMVF5TmtoUk5VazJObEpXUVRWRVNEY3pVMEU9fKOLvSd5WMpLOYgc5YUEfa7LBeO29APPel6Xv2UJ-FPT'
  }

  public ip = 'http://114.215.237.162';

  public materialUrl = {
    /** 材料字典列表 */
    "drugmaterial/list": this.ip + `/service/560/drugmaterial/list?site=${this.config.site}&appid=${this.config.appid}&token=${this.config.token}`
  }
  constructor() { }
}
