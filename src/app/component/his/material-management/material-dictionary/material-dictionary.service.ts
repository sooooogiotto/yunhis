import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { ConfigService, ip } from "src/app/config.service";

import { HttpErrorHandler, HandleError } from "../../../../http-error-handler.service";
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MaterialDictionaryService {
  private handleError: HandleError;

  drugmateriallUrl = {
    /** 材料字典列表 */
    "drugmaterial/list": `${ip}/service/560/drugmaterial/list?site=${this.configService.config.site}&appid=${this.configService.config.appid}&token=${this.configService.config.token}`,
    /** 生产厂商列表 */
    "manufacturer/list": `${ip}/service/560/manufacturer/list?site=${this.configService.config.site}&appid=${this.configService.config.appid}&token=${this.configService.config.token}`
  }
  constructor(httpErrorHandler: HttpErrorHandler, private http: HttpClient, private configService: ConfigService) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getDrugmaterialList(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['drugmaterial/list'], { params: param }).pipe(
      catchError(this.handleError('getDrugmaterialList'))
    )
  }
}
