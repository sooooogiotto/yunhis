import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService, ip } from "src/app/config.service";

import { HttpErrorHandler, HandleError } from "../../../../http-error-handler.service";
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MaterialDictionaryService {
  private handleError: HandleError;

  fixedParam: string = `?site=${this.configService.config.site}&appid=${this.configService.config.appid}&token=${this.configService.config.token}`

  drugmateriallUrl = {
    /** 材料字典列表 */
    "drugmaterial/list": `${ip}/service/560/drugmaterial/list${this.fixedParam}`,
    /** 材料字典列表 */
    "drugmaterial": `${ip}/service/560/drugmaterial`,
    /** 材料字典列表 */
    "putdrugmaterial": `${ip}/service/560/drugmaterial`
  }
  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getDrugmaterialList(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['drugmaterial/list'], { params: param }).pipe(
      catchError(this.handleError('getDrugmaterialList'))
    )
  }

  getDrugmaterial(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['drugmaterial'] + `/${param.get('id')}`).pipe(
      catchError(this.handleError('getDrugmaterial'))
    )
  }

  putDrugmaterial(param: object): Observable<any> {
    return this.http.put(this.drugmateriallUrl['putdrugmaterial'] + `/${param['id']}`, param, httpOptions).pipe(
      catchError(this.handleError('putdrugmaterial'))
    )
  }
}
