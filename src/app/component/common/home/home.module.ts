import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

/** 基础模块 */
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** 本土化 */
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
/** 拦截器、错误处理 */
import { httpInterceptorProviders } from "src/app/http-interceptors/index";
import { RequestCache, RequestCacheWithMap } from 'src/app/request-cache.service';
import { HttpErrorHandler } from "src/app/http-error-handler.service";
/** Cookie */
import { CookieService } from "ngx-cookie-service";
/** 复用路由 */
import { CustomReuseStrategy } from 'src/app/CustomReuseStrategy';
import { RouteReuseStrategy } from '@angular/router';
/** 打印 */
import { EssenceNg2PrintModule } from "essence-ng2-print";
registerLocaleData(zh);

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EssenceNg2PrintModule
  ],
  providers: [
    HttpErrorHandler,
    httpInterceptorProviders,
    CookieService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class HomeModule { }
