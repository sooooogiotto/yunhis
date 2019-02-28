import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TrimNameInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const body = req.body;
    if (!body || !body.name ) {
      return next.handle(req);
    }
    // 复制主体并从name属性中去掉空格
    const newBody = { ...body, name: body.name.trim() };
    // 克隆请求并设置其主体
    const newReq = req.clone({ body: newBody });
    // 将克隆的请求发送到下一个处理程序
    return next.handle(newReq);
  }
}
