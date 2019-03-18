import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService, ip } from 'src/app/config.service';
import { HandleError, HttpErrorHandler } from "src/app/http-error-handler.service";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class MaterialManufactureronaryService {

  private handleError: HandleError;

  manufactureronaryUrl = {
    /** 生产商列表 */
    "manufactureronary/list": `${ip}/service/560/manufacturer/list${this.configService.fixedParam}`,
    /** 生产商列表 */
    "manufactureronary/count": `${ip}/service/560/manufacturer/count${this.configService.fixedParam}`,
    /** 生产商详情 */
    "manufactureronary": `${ip}/service/560/manufacturer`,
    /** 生产商修改 */
    "putmanufactureronary": `${ip}/service/560/manufacturer`,
    /** 生产商新增 */
    "postmanufactureronary": `${ip}/service/560/manufacturer`
  }
  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getManufactureronaryList(param: HttpParams): Observable<any> {
    return this.http.get(this.manufactureronaryUrl['manufactureronary/list'], { params: param }).pipe(
      catchError(this.handleError('getManufactureronaryList'))
    )
  }
  getManufactureronaryCount(param: HttpParams): Observable<any> {
    return this.http.get(this.manufactureronaryUrl['manufactureronary/count'], { params: param }).pipe(
      catchError(this.handleError('getManufactureronaryList'))
    )
  }

  getManufactureronary(param: HttpParams): Observable<any> {
    return this.http.get(this.manufactureronaryUrl['manufactureronary'] + `/${param.get('id')}`).pipe(
      catchError(this.handleError('getManufactureronary'))
    )
  }

  putManufactureronary(param: object): Observable<any> {
    return this.http.put(this.manufactureronaryUrl['putmanufactureronary'] + `/${param['id']}`, param, httpOptions).pipe(
      catchError(this.handleError('putmanufactureronary'))
    )
  }

  postmanufactureronary(param: object): Observable<any> {
    return this.http.post(this.manufactureronaryUrl['putmanufactureronary'], param, httpOptions).pipe(
      catchError(this.handleError('putmanufactureronary'))
    )
  }

}
