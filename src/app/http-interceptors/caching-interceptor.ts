import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpHeaders, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import { RequestCache } from '../request-cache.service';

import { ip } from "../config.service";


/**
 * 如果请求是可访问的（例如，包搜索），并且响应在缓存中，则将缓存响应作为可观察的返回
 * 如果“x-refresh”头为真,
 * 然后使用next()的响应重新运行包搜索,
 * 返回首先发出缓存响应的可观察项.
 *
 * 如果不在缓存中或不可计算,
 * 将请求传递到下一个next()
 */
@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cache: RequestCache) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    // 如果不能继续.
    if (!isCachable(req)) { return next.handle(req); }

    const cachedResponse = this.cache.get(req);
    // 缓存然后刷新
    if (req.headers.get('x-refresh')) {
      const results$ = sendRequest(req, next, this.cache);
      return cachedResponse ?
        results$.pipe(startWith(cachedResponse)) :
        results$;
    }
    // 缓存或获取
    return cachedResponse ?
      of(cachedResponse) : sendRequest(req, next, this.cache);
  }
}


/** 这个请求可以接受吗? */
function isCachable(req: HttpRequest<any>) {
  // 只能获取GET请求
  return req.method === 'GET' &&
    // 只能在此应用程序中进行NPM包搜索
    -1 < req.url.indexOf(ip);
}

/**
 * 通过将请求发送到可观察到的服务器响应 `next()`.
 * 将在退出时向缓存添加响应.
 */
function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache): Observable<HttpEvent<any>> {

  // NPM搜索请求中不允许有头文件
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // 除了响应之外，可能还有其他事件.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // 更新缓存.
      }
    })
  );
}

