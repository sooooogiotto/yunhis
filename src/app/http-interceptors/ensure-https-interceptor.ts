import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class EnsureHttpsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // (暂且不用)克隆请求并同时将"http://"替换为"https://"
    const secureReq = req.clone({
      //url: req.url.replace('http://', 'https://')
      //url: req.url.replace('http://', 'http://')
    });
    // 将克隆的"安全"请求发送到下一个处理程序.
    return next.handle(secureReq);
  }
}
