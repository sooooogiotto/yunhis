import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** 基础模块 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/** 本土化 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
/** 拦截器、错误处理 */
import { httpInterceptorProviders } from "./http-interceptors/index";
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { HttpErrorHandler } from "./http-error-handler.service";
/** Cookie */
import { CookieService } from "ngx-cookie-service";
/** 复用路由 */
import { CustomReuseStrategy } from './CustomReuseStrategy';
import { RouteReuseStrategy } from '@angular/router';
import { PageComponent } from './component/common/page/page.component';
/** hisComponent */
import { HomePageComponent } from './component/common/home-page/home-page.component';
import { LoginComponent } from './component/common/login/login.component';
import { MaterialInComponent } from './component/his/material-management/material-in/material-in.component';
import { MaterialOutComponent } from './component/his/material-management/material-out/material-out.component';
import { MaterialInAuditComponent } from './component/his/material-management/material-in-audit/material-in-audit.component';
import { MaterialPriceComponent } from './component/his/material-management/material-price/material-price.component';
import { InventoryManagementComponent } from './component/his/material-management/inventory-management/inventory-management.component';
import { MaterialInAddModalComponent } from './component/his/material-management/material-in/material-in-add-modal/material-in-add-modal.component';
import { MaterialInDetailModalComponent } from './component/his/material-management/material-in/material-in-detail-modal/material-in-detail-modal.component';
import { MaterialInAuditModalComponent } from './component/his/material-management/material-in-audit/material-in-audit-modal/material-in-audit-modal.component';
import { AuditConfirmModalComponent } from './component/his/material-management/common/audit-confirm-modal/audit-confirm-modal.component';
import { MaterialOutAddModalComponent } from './component/his/material-management/material-out/material-out-add-modal/material-out-add-modal.component';
import { MaterialOutDetailModalComponent } from './component/his/material-management/material-out/material-out-detail-modal/material-out-detail-modal.component';
import { MaterialOutOfStockModalComponent } from './component/his/material-management/material-out/material-out-of-stock-modal/material-out-of-stock-modal.component';
import { MaterialReceiveComponent } from './component/his/material-management/material-receive/material-receive.component';
import { MaterialReceiveDetailModalComponent } from './component/his/material-management/material-receive/material-receive-detail-modal/material-receive-detail-modal.component';
import { MaterialApplyComponent } from './component/his/material-management/material-apply/material-apply.component';
import { MaterialApplyAddModalComponent } from './component/his/material-management/material-apply/material-apply-add-modal/material-apply-add-modal.component';
import { MaterialApplyDetailModalComponent } from './component/his/material-management/material-apply/material-apply-detail-modal/material-apply-detail-modal.component';
import { MaterialCheckComponent } from './component/his/material-management/material-check/material-check.component';
import { MaterialCheckAddModalComponent } from './component/his/material-management/material-check/material-check-add-modal/material-check-add-modal.component';
import { MaterialCheckAuditModalComponent } from './component/his/material-management/common/material-check-audit-modal/material-check-audit-modal.component';
import { MaterialCheckAddModalConfirmComponent } from './component/his/material-management/material-check/material-check-add-modal/material-check-add-modal-confirm/material-check-add-modal-confirm.component';
import { MaterialCheckAuditComponent } from './component/his/material-management/material-check-audit/material-check-audit.component';
import { MaterialPriceAuditModalComponent } from './component/his/material-management/common/material-price-audit-modal/material-price-audit-modal.component';
import { MaterialPriceAddModalComponent } from './component/his/material-management/material-price/material-price-add-modal/material-price-add-modal.component';
import { MaterialPriceAuditComponent } from './component/his/material-management/material-price-audit/material-price-audit.component';
import { MaterialDictionaryComponent } from './component/his/material-management/material-dictionary/material-dictionary.component';
import { MaterialAddDictionaryComponent } from './component/his/material-management/material-dictionary/material-add-dictionary/material-add-dictionary.component';
import { MaterialDetailDictionaryComponent } from './component/his/material-management/material-dictionary/material-detail-dictionary/material-detail-dictionary.component';
import { MaterialManufactureronaryComponent } from './component/his/material-management/material-manufactureronary/material-manufactureronary.component';
import { MaterialAddManufactureronaryComponent } from './component/his/material-management/material-manufactureronary/material-add-manufactureronary/material-add-manufactureronary.component';
import { MaterialDetailManufactureronaryComponent } from './component/his/material-management/material-manufactureronary/material-detail-manufactureronary/material-detail-manufactureronary.component';
import { MaterialSupplierComponent } from './component/his/material-management/material-supplier/material-supplier.component';
import { MaterialAddSupplierComponent } from './component/his/material-management/material-supplier/material-add-supplier/material-add-supplier.component';
import { MaterialDetailSupplierComponent } from './component/his/material-management/material-supplier/material-detail-supplier/material-detail-supplier.component';
import { MaterialCheckConfirmComponent } from './component/his/material-management/material-check/material-check-confirm/material-check-confirm.component';
import { DeleteConfirmComponent } from './component/his/material-management/common/delete-confirm/delete-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    PageComponent,
    MaterialInComponent,
    MaterialOutComponent,
    MaterialInAuditComponent,
    MaterialPriceComponent,
    InventoryManagementComponent,
    MaterialInAddModalComponent,
    MaterialInDetailModalComponent,
    MaterialInAuditModalComponent,
    AuditConfirmModalComponent,
    MaterialOutAddModalComponent,
    MaterialOutDetailModalComponent,
    MaterialOutOfStockModalComponent,
    MaterialReceiveComponent,
    MaterialReceiveDetailModalComponent,
    MaterialApplyComponent,
    MaterialApplyAddModalComponent,
    MaterialApplyDetailModalComponent,
    MaterialCheckComponent,
    MaterialCheckAddModalComponent,
    MaterialCheckAuditModalComponent,
    MaterialCheckAddModalConfirmComponent,
    MaterialCheckAuditComponent,
    MaterialPriceAuditModalComponent,
    MaterialPriceAddModalComponent,
    MaterialPriceAuditComponent,
    MaterialDictionaryComponent,
    MaterialAddDictionaryComponent,
    MaterialDetailDictionaryComponent,
    MaterialManufactureronaryComponent,
    MaterialAddManufactureronaryComponent,
    MaterialDetailManufactureronaryComponent,
    MaterialSupplierComponent,
    MaterialAddSupplierComponent,
    MaterialDetailSupplierComponent,
    MaterialCheckConfirmComponent,
    DeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpErrorHandler,
    httpInterceptorProviders,
    CookieService,
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RequestCache, useClass: RequestCacheWithMap },
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
