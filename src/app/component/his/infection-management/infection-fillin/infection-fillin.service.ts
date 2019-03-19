import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ConfigService, ip, zzip } from 'src/app/config.service';
import { HandleError, HttpErrorHandler } from "src/app/http-error-handler.service";
import { UtilsService } from 'src/app/utils.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': `${sessionStorage.getItem('token_type')} ${sessionStorage.getItem('token')}`
  })
};
@Injectable({
  providedIn: 'root'
})
export class InfectionFillInService {
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    private configService: ConfigService,
    private util: UtilsService
  ) {
    this.handleError = httpErrorHandler.createHandleError('InfectionFillInService');
  }

  private handleError: HandleError;

  infectionFillInUrl: object = {
    getQueryReportUrl: `${zzip}/infedisereport/infectiousDiseasesReport/queryReport`
  };

  getQueryReport(param: HttpParams): Observable<any> {
    param = param.set("size", param.get('pagenum')).set("current", param.get('curPage'))
    return this.http.get(this.infectionFillInUrl['getQueryReportUrl'], { params: param, headers: httpOptions.headers }).pipe(
      catchError(this.handleError('getQueryReport'))
    )
  }
}
