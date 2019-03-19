import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilsService } from './utils.service';
import { Base64 } from "js-base64";

/** base64 */
export const ip = 'http://114.215.237.162';
export const zzip = 'http://192.168.3.60:9999'

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `Basic ${Base64.encode("test:test")}`
  })
};
@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  //public ip = 'http://' + window.location.host;
  private config = {
    appid: '18',
    site: '1\'',
    token: 'MTU1MTE2NDY0OXxOd3dBTkRVelFVTkRTMWxFU1VSTFRWVlFOMU5JTmtsUVJUTlVVVlZZTlZSS05sWTFTMVF5TmtoUk5VazJObEpXUVRWRVNEY3pVMEU9fKOLvSd5WMpLOYgc5YUEfa7LBeO29APPel6Xv2UJ-FPT'
  }

  public fixedParam: string = `?site=${this.config.site}&appid=${this.config.appid}&token=${this.config.token}`

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }


  /** 获取token */
  getToken(): void {
    let formData = new FormData();
    formData.append("grant_type", "password")
    formData.append("scope", "server")
    formData.append("username", "2")
    formData.append("password", "pa123456ssword")
    this.http.post(`${zzip}/auth/oauth/token`, formData, httpOptions,
    ).subscribe(data => {
      sessionStorage.setItem('token', data['access_token']);
      sessionStorage.setItem('token_type', data['token_type']);
    })
  }
}
