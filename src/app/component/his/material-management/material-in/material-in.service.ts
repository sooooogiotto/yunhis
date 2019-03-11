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
    "postmaterialInList": `${ip}/service/560/gdentrydetails/replace`
  }
  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient,
    private configService: ConfigService,
    private util: UtilsService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getMaterialInList(param: HttpParams): Observable<any> {
    param = param.set('starttime', this.util.dateToLocalString(param.get('starttime')));
    param = param.set('endtime', this.util.dateToLocalString(param.get('endtime')));
    return this.http.get(this.materialInUrl['materialIn/list'], { params: param }).pipe(
      catchError(this.handleError('getMaterialInList'))
    )
  }
  getMaterialInCount(param: HttpParams): Observable<any> {
    param = param.set('starttime', this.util.dateToLocalString(param.get('starttime')));
    param = param.set('endtime', this.util.dateToLocalString(param.get('endtime')));
    return this.http.get(this.materialInUrl['materialIn/count'], { params: param }).pipe(
      catchError(this.handleError('getMaterialInList'))
    )
  }

  getMaterialIn(param: HttpParams): Observable<any> {
    return this.http.get(this.materialInUrl['materialIn'] + `/${param.get('id')}`).pipe(
      tap(_ => {
        if (new Date(_['data'][0]['godowntime']) < new Date('1970-01-01')) {
          _['data'][0]['godowntime'] = '1970-01-01';
        }
      }),
      catchError(this.handleError('getMaterialIn'))
    )
  }

  putMaterialIn(param: object): Observable<any> {
    delete param['createtime'];
    delete param['godowntime'];
    return this.http.put(this.materialInUrl['putmaterialIn'] + `/${param['id']}`, param, httpOptions).pipe(
      catchError(this.handleError('putmaterialIn'))
    )
  }

  postmaterialIn(param: object): Observable<any> {
    delete param['createtime'];
    delete param['godowntime'];
    delete param['id'];
    return this.http.post(this.materialInUrl['postmaterialIn'], param, httpOptions).pipe(
      catchError(this.handleError('postmaterialIn'))
    )
  }
  postmaterialInList(param: object): Observable<any> {
    return this.http.post(this.materialInUrl['postmaterialInList'], param, httpOptions).pipe(
      catchError(this.handleError('postmaterialInList'))
    )
  }

}
