import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public get(path: String) {
    this.http.get(path).pipe(

    )
  }
  constructor(private http: HttpClient, private headers: HttpHeaders) { }
}
