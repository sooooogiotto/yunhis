import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { EssenceNg2PrintModule } from 'essence-ng2-print';
/** 基础模块 */
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** Cookie */
import { CookieService } from "ngx-cookie-service";
import { ConfirmComponent } from 'src/app/component/common/confirm/confirm.component';
import { PageModule } from 'src/app/component/common/page/page.module';
import { PageComponent } from 'src/app/component/common/page/page/page.component';
/** 复用路由 */
import { CustomReuseStrategy } from 'src/app/CustomReuseStrategy';
import { HttpErrorHandler } from "src/app/http-error-handler.service";
/** 拦截器、错误处理 */
import { httpInterceptorProviders } from "src/app/http-interceptors/index";
import { RequestCache, RequestCacheWithMap } from 'src/app/request-cache.service';
import { InfectionDetailModule } from '../common/infection-detail/infection-detail.module';
import { InfectionDetailComponent } from '../common/infection-detail/infection-detail/infection-detail.component';
import { InfectionPrintComponent } from '../common/infection-print/infection-print/infection-print.component';
import { InfectionAuditRoutingModule } from './infection-audit-routing.module';
import { InfectionAuditComponent } from './infection-audit/infection-audit.component';
@NgModule({
  declarations: [
    InfectionAuditComponent,
    // InfectionPrintComponent,
    // ConfirmComponent,
  ],
  imports: [
    CommonModule,
    InfectionAuditRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EssenceNg2PrintModule,
    InfectionDetailModule,
    PageModule
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
export class InfectionAuditModule { }
