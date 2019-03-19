import { CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** 打印 */
import { EssenceNg2PrintModule } from "essence-ng2-print";
/** 基础模块 */
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
/** Cookie */
import { CookieService } from "ngx-cookie-service";
import { ConfirmComponent } from 'src/app/component/common/confirm/confirm.component';
import { PageModule } from 'src/app/component/common/page/page.module';
import { PageComponent } from 'src/app/component/common/page/page/page.component';
/**  */
import { HttpErrorHandler } from "src/app/http-error-handler.service";
/** 拦截器、错误处理 */
import { httpInterceptorProviders } from "src/app/http-interceptors/index";
import { RequestCache, RequestCacheWithMap } from 'src/app/request-cache.service';
import { InfectionDetailModule } from '../common/infection-detail/infection-detail.module';
import { InfectionDetailComponent } from '../common/infection-detail/infection-detail/infection-detail.component';
import { InfectionPrintComponent } from '../common/infection-print/infection-print/infection-print.component';
import { InfectionFillInBCardComponent } from '../infection-fill-in/infection-fill-in-b-card/infection-fill-in-b-card.component';
import { InfectionFillInHivCardComponent } from '../infection-fill-in/infection-fill-in-hiv-card/infection-fill-in-hiv-card.component';
import { InfectionFillInRecordCardComponent } from '../infection-fill-in/infection-fill-in-record-card/infection-fill-in-record-card.component';
import { InfectionFillinRoutingModule } from './infection-fillin-routing.module';
import { InfectionFillinComponent } from './infection-fillin/infection-fillin.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    InfectionFillinComponent,
    InfectionFillInRecordCardComponent,
    InfectionFillInBCardComponent,
    InfectionFillInHivCardComponent,
    InfectionPrintComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    InfectionFillinRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EssenceNg2PrintModule,
    PageModule,
    InfectionDetailModule
  ],
  providers: [
    HttpErrorHandler,
    httpInterceptorProviders,
    CookieService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})
export class InfectionFillinModule { }
