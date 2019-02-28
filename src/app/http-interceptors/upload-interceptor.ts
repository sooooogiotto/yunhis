import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler,
  HttpRequest, HttpResponse,
  HttpEventType, HttpProgressEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** 模拟服务器响应文件上载请求 */
@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (req.url.indexOf('/upload/file') === -1) {
      return next.handle(req);
    }
    const delay = 300; // TODO: inject delay?
    return createUploadEvents(delay);
  }
}

/** 创建上载事件流的模拟 */
function createUploadEvents(delay: number) {
  // 模拟将在ProgressEvent中提供此信息的XHR行为
  const chunks = 5;
  const total = 12345678;
  const chunkSize = Math.ceil(total / chunks);

  return new Observable<HttpEvent<any>>(observer => {
    // 通知事件流请求已发送
    observer.next({type: HttpEventType.Sent});

    uploadLoop(0);

    function uploadLoop(loaded: number) {
      // 注意：不能使用setinterval或rxjs延迟（使用setinterval）
      // 因为E2E测试无法完成。区域性的东西？
      // 改用setTimeout和tail递归
        setTimeout(() => {
          loaded += chunkSize;

          if (loaded >= total) {
            const doneResponse = new HttpResponse({
              status: 201, // 完成，但没有body;
            });
            observer.next(doneResponse);
            observer.complete();
            return;
          }

          const progressEvent: HttpProgressEvent = {
            type: HttpEventType.UploadProgress,
            loaded,
            total
          };
          observer.next(progressEvent);
          uploadLoop(loaded);
        }, delay);
    }
  });
}
