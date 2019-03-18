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
export class MaterialSupplierService {

  private handleError: HandleError;


  supplierUrl = {
    /** 生产商列表 */
    "supplier/list": `${ip}/service/560/supplier/list${this.configService.fixedParam}`,
    /** 生产商列表 */
    "supplier/count": `${ip}/service/560/supplier/count${this.configService.fixedParam}`,
    /** 生产商详情 */
    "supplier": `${ip}/service/560/supplier`,
    /** 生产商修改 */
    "putsupplier": `${ip}/service/560/supplier`,
    /** 生产商新增 */
    "postsupplier": `${ip}/service/560/supplier`
  }
  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient,
    private configService: ConfigService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getSupplierList(param: HttpParams): Observable<any> {
    return this.http.get(this.supplierUrl['supplier/list'], { params: param }).pipe(
      catchError(this.handleError('getSupplierList'))
    )
  }
  getSupplierCount(param: HttpParams): Observable<any> {
    return this.http.get(this.supplierUrl['supplier/count'], { params: param }).pipe(
      catchError(this.handleError('getSupplierList'))
    )
  }

  getSupplier(param: HttpParams): Observable<any> {
    return this.http.get(this.supplierUrl['supplier'] + `/${param.get('id')}`).pipe(
      catchError(this.handleError('getSupplier'))
    )
  }

  putSupplier(param: object): Observable<any> {
    return this.http.put(this.supplierUrl['putsupplier'] + `/${param['id']}`, param, httpOptions).pipe(
      catchError(this.handleError('putsupplier'))
    )
  }

  postsupplier(param: object): Observable<any> {
    return this.http.post(this.supplierUrl['putsupplier'], param, httpOptions).pipe(
      catchError(this.handleError('putsupplier'))
    )
  }

}
