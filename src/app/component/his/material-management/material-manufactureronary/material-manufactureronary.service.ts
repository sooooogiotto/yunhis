import { Injectable } from "@angular/core";
import { HttpErrorHandler, HandleError } from "src/app/http-error-handler.service";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ip, ConfigService } from 'src/app/config.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MaterialManufactureronaryService {

  private handleError: HandleError;

  fixedParam: string = `?site=${this.configService.config.site}&appid=${this.configService.config.appid}&token=${this.configService.config.token}`

 drugmateriallUrl = {
    /** 生产厂商维护 */
    "manufacturer/list": `${ip}/service/560/manufacturer/list${this.fixedParam}`,
    /** 生产厂商详情 */
    "manufacturer": `${ip}/service/560/manufacturer`,
  }
  constructor(httpErrorHandler: HttpErrorHandler, private http: HttpClient, private configService: ConfigService) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getManufacturerList(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['manufacturer/list'], { params: param }).pipe(
      catchError(this.handleError('getManufacturerList'))
    )
  } 
   getManufacturer(param: HttpParams): Observable<any> {
    return this.http.get(this.drugmateriallUrl['manufacturer'] + `/${param.get('id')}`).pipe(
      catchError(this.handleError('getManufacturer'))
    )
  }
}
