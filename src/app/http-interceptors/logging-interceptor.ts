import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    const started = Date.now();
    let ok: string;

    // 通过日志记录扩展可观察到的服务器响应
    return next.handle(req)
      .pipe(
        tap(
          // 有响应时成功；忽略其他事件
          event => ok = event instanceof HttpResponse ? 'succeeded' : '',
          // 操作失败；错误是httpErrorResponse
          error => ok = 'failed'
        ),
        // 当可观察到的响应完成或错误时记录
        finalize(() => {
          const elapsed = Date.now() - started;
          const msg = `${req.method} "${req.urlWithParams}"
             ${ok} in ${elapsed} ms.`;
          console.log(msg);
        })
      );
  }
}
