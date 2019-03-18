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
  /** 样本来源 */
  getSampleSources(): Observable<any> {
    return this.http.get('assets/sampleSources.json').pipe(
      catchError(this.handleError('getSampleSources'))
    )
  }
  /** 感染途径 */
  getInfectionRoute(): Observable<any> {
    return this.http.get('assets/infectionRoute.json').pipe(
      catchError(this.handleError('getInfectionRoute'))
    )
  }
  /** 获取疾病名称 */
  getDiseaseName(): Observable<any> {
    return this.http.get('assets/diseaseName.json').pipe(
      catchError(this.handleError('getDiseaseName'))
    )
  }
  /** 获得文化程度 */
  getPersonCulture(): Observable<any> {
    return this.http.get('assets/personCulture.json').pipe(
      catchError(this.handleError('personCulture'))
    )
  }
  /** 获得婚姻状况 */
  getPersonMarriage(): Observable<any> {
    return this.http.get('assets/personMarriage.json').pipe(
      catchError(this.handleError('personMarriage'))
    )
  }
  /** 获得所有传染病名称 */
  getInfectionGroup(): Observable<any> {
    return this.http.get('assets/infectionGroup.json').pipe(
      catchError(this.handleError('getInfectionGroup'))
    )
  }
  /** 获取人员分类 */
  getPersonGroup(): Observable<any> {
    return this.http.get('assets/personGroup.json').pipe(
      catchError(this.handleError('getPersonGroup'))
    )
  }
  /** 获取人来源 */
  getPersonFrom(): Observable<any> {
    return this.http.get('assets/personFrom.json').pipe(
      catchError(this.handleError('getPersonFrom'))
    )
  }
  /** 获取材料单位数据 */
  getUnitData(): Observable<any> {
    return this.http.get('assets/unit.json').pipe(
      catchError(this.handleError('getUnitData'))
    )
  }
  /** 获取中国省市区数据 */
  getPUA(): Observable<any> {
    return this.http.get('assets/PCA.json').pipe(
      catchError(this.handleError('getPUA'))
    )
  }
  /** 根据数据设置省市区 */
  setPUAdata(addr: string, obj: object): void {
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
  }
}
