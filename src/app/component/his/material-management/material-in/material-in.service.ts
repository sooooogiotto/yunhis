import { Injectable } from "@angular/core";
import { HttpErrorHandler, HandleError } from "src/app/http-error-handler.service";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ip, ConfigService } from 'src/app/config.service';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UtilsService } from 'src/app/utils.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MaterialInService {

  private handleError: HandleError;

  fixedParam: string = `?site=${this.configService.config.site}&appid=${this.configService.config.appid}&token=${this.configService.config.token}`

  materialInUrl = {
    /** 入库列表 */
    "materialIn/list": `${ip}/service/560/gdentry/list${this.fixedParam}`,
    /** 入库列表条数 */
    "materialIn/count": `${ip}/service/560/gdentry/count${this.fixedParam}`,
    /** 入库列表导出 */
    "materialIn/export": `${ip}/service/560/gdentry/export${this.fixedParam}`,
    /** 入库详情 */
    "materialIn": `${ip}/service/560/gdentry`,
    /** 入库单修改 */
    "putmaterialIn": `${ip}/service/560/gdentry`,
    /** 入库单新增 */
    "postmaterialIn": `${ip}/service/560/gdentry`,
    /** 入库单List新增 */
    "postmaterialInList": `${ip}/service/560/gdentrydetails/replace`,
    /** 入库单材料明细导出 */
    "getmaterialInExcel": `${ip}/service/560/gdentrydetails/export`
  }
  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient,
    private configService: ConfigService,
    private util: UtilsService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getMaterialInList(params: HttpParams): Observable<any> {
    params = params.set('starttime', this.util.dateToLocalString(params.get('starttime')));
    params = params.set('endtime', this.util.dateToLocalString(params.get('endtime')));
    return this.http.get(this.materialInUrl['materialIn/list'], { params }).pipe(
      catchError(this.handleError('getMaterialInList'))
    )
  }
  getMaterialInCount(params: HttpParams): Observable<any> {
    params = params.set('starttime', this.util.dateToLocalString(params.get('starttime')));
    params = params.set('endtime', this.util.dateToLocalString(params.get('endtime')));
    return this.http.get(this.materialInUrl['materialIn/count'], { params }).pipe(
      catchError(this.handleError('getMaterialInList'))
    )
  }

  getMaterialIn(params: HttpParams): Observable<any> {
    return this.http.get(this.materialInUrl['materialIn'] + `/${params.get('id')}`).pipe(
      tap(_ => {
        if (new Date(_['data'][0]['godowntime']) < new Date('1970-01-01')) {
          _['data'][0]['godowntime'] = '1970-01-01';
        }
      }),
      catchError(this.handleError('getMaterialIn'))
    )
  }

  getmaterialInExcel(params: HttpParams): Observable<any> {
    return this.http.get(this.materialInUrl['getmaterialInExcel'], { params }).pipe(
      catchError(this.handleError('postmaterialInList'))
    )
  }
  putMaterialIn(params: object): Observable<any> {
    delete params['createtime'];
    delete params['godowntime'];
    return this.http.put(this.materialInUrl['putmaterialIn'] + `/${params['id']}`, params, httpOptions).pipe(
      catchError(this.handleError('putmaterialIn'))
    )
  }

  postmaterialIn(params: object): Observable<any> {
    delete params['createtime'];
    delete params['godowntime'];
    delete params['id'];
    return this.http.post(this.materialInUrl['postmaterialIn'], params, httpOptions).pipe(
      catchError(this.handleError('postmaterialIn'))
    )
  }
  postmaterialInList(params: object): Observable<any> {
    return this.http.post(this.materialInUrl['postmaterialInList'], params, httpOptions).pipe(
      catchError(this.handleError('postmaterialInList'))
    )
  }

}