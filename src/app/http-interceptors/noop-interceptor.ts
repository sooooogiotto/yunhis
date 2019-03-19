import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { UtilsService } from '../utils.service';

/** 将未接触的请求传递给下一个请求处理程序. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(
    private utils: UtilsService
  ) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req);
  }
}
