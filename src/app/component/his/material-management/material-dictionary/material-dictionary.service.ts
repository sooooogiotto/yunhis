import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService, ip } from "src/app/config.service";
import { HandleError, HttpErrorHandler } from "../../../../http-error-handler.service";

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

  drugmateriallUrl = {
    /** 材料字典列表 */
    "drugmaterial/list": `${ip}/service/560/drugmaterial/list${this.configService.fixedParam}`,
    /** 材料字典列表 */
    "drugmaterial/count": `${ip}/service/560/drugmaterial/count${this.configService.fixedParam}`,
    /** 材料字典详情 */
    "drugmaterial": `${ip}/service/560/drugmaterial`,
    /** 材料字典修改 */
    "putdrugmaterial": `${ip}/service/560/drugmaterial`,
    /** 材料字典新增 */
    "postdrugmaterial": `${ip}/service/560/drugmaterial`
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
  getDrugmaterialCount(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['drugmaterial/count'], { params: param }).pipe(
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

  postdrugmaterial(param: object): Observable<any> {
    return this.http.post(this.drugmateriallUrl['putdrugmaterial'], param, httpOptions).pipe(
      catchError(this.handleError('putdrugmaterial'))
    )
  }
}
