import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from "src/app/http-error-handler.service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StaticDataService {
  private handleError: HandleError;

  constructor(
    httpErrorHandler: HttpErrorHandler,
    private http: HttpClient
  ) {
    this.handleError = httpErrorHandler.createHandleError('MaterialDictionaryService');
  }

  getUnitData(): Observable<any> {
    return this.http.get('assets/unit.json').pipe(
      catchError(this.handleError('getUnitData'))
    )
  }

  getPUA(): Observable<any> {
    return this.http.get('assets/PCA.json').pipe(
      catchError(this.handleError('getPUA'))
    )
  }

  setPUAdata(addr: string, obj: object): void {
    debugger
    let fisrtIndex = [addr.indexOf("省") === -1 ? 10000 : addr.indexOf("省"),
    addr.indexOf("区") === -1 ? 10000 : addr.indexOf("区"),
    addr.indexOf("市") === -1 ? 10000 : addr.indexOf("市")].sort((a, b) => a - b)[0] + 1;
    obj['province'] = addr.substring(0, fisrtIndex);
    addr = addr.substring(fisrtIndex, addr.length);
    let secondIndex = [addr.indexOf("盟") === -1 ? 10000 : addr.indexOf("盟"),
    addr.indexOf("区") === -1 ? 10000 : addr.indexOf("区"),
    addr.indexOf("市") === -1 ? 10000 : addr.indexOf("市")].sort((a, b) => a - b)[0] + 1;
    obj['city'] = addr.substring(0, secondIndex);
    addr = addr.substring(secondIndex, addr.length);
    let thridIndex = [addr.indexOf("旗") === -1 ? 10000 : addr.indexOf("旗"),
    addr.indexOf("区") === -1 ? 10000 : addr.indexOf("区"),
    addr.indexOf("县") === -1 ? 10000 : addr.indexOf("县")].sort((a, b) => a - b)[0] + 1;
    obj['area'] = addr.substring(0, thridIndex);
    addr = addr.substring(thridIndex, addr.length);
    obj['street'] = addr;
    // if (addr.indexOf("省") >= 0) {
    //   obj['province'] = addr.substring(0, addr.indexOf("省") + 1);
    //   addr = addr.substring(addr.indexOf("省") + 1, addr.length);
    // } else if (addr.indexOf("区") >= 0) {
    //   obj['province'] = addr.substring(0, addr.indexOf("区") + 1);
    //   addr = addr.substring(addr.indexOf("区") + 1, addr.length);
    // } else if (addr.indexOf("市") >= 0) {
    //   obj['province'] = addr.substring(0, addr.indexOf("市") + 1);
    //   addr = addr.substring(addr.indexOf("市") + 1, addr.length);
    // }

    // if (addr.indexOf("市") >= 0) {
    //   obj['city'] = addr.substring(0, addr.indexOf("市") + 1);
    //   addr = addr.substring(addr.indexOf("市") + 1, addr.length);
    // } else if (addr.indexOf("区") >= 0) {
    //   obj['city'] = addr.substring(0, addr.indexOf("区") + 1);
    //   addr = addr.substring(addr.indexOf("区") + 1, addr.length);
    // } else if (addr.indexOf("市") >= 0) {
    //   obj['city'] = addr.substring(0, addr.indexOf("州") + 1);
    //   addr = addr.substring(addr.indexOf("州") + 1, addr.length);
    // } else if (addr.indexOf("盟") >= 0) {
    //   obj['city'] = addr.substring(0, addr.indexOf("盟") + 1);
    //   addr = addr.substring(addr.indexOf("盟") + 1, addr.length);
    // }

    // if (addr.indexOf("区") >= 0) {
    //   obj['area'] = addr.substring(0, addr.indexOf("区") + 1);
    //   addr = addr.substring(addr.indexOf("区") + 1, addr.length);
    //   obj['street'] = addr;
    // } else if (addr.indexOf("县") >= 0) {
    //   obj['area'] = addr.substring(0, addr.indexOf("县") + 1);
    //   addr = addr.substring(addr.indexOf("县") + 1, addr.length);
    //   obj['street'] = addr;
    // } else if (addr.indexOf("旗") >= 0) {
    //   obj['area'] = addr.substring(0, addr.indexOf("旗") + 1);
    //   addr = addr.substring(addr.indexOf("旗") + 1, addr.length);
    //   obj['street'] = addr;
    // }
  }
}
