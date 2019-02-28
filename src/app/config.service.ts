import { Injectable } from '@angular/core';

export const ip = 'http://114.215.237.162';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  //public ip = 'http://' + window.location.host;
  public config = {
    appid: '18',
    site: '1\'',
    token: 'MTU1MTE2NDY0OXxOd3dBTkRVelFVTkRTMWxFU1VSTFRWVlFOMU5JTmtsUVJUTlVVVlZZTlZSS05sWTFTMVF5TmtoUk5VazJObEpXUVRWRVNEY3pVMEU9fKOLvSd5WMpLOYgc5YUEfa7LBeO29APPel6Xv2UJ-FPT'
  }


  constructor() { }
}
