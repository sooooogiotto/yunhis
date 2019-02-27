import { Injectable } from '@angular/core';
import { HttpService } from "src/app/service/http.service";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MaterialDictionaryService {
  constructor(private http: HttpService) { }

  getdrugmaterial(path: string): Observable<any> {
    return this.http.get(path);
  }
}
