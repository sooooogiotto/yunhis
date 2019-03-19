import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialInComponent } from '../../his/material-management/material-in/material-in.component';
import { MaterialOutComponent } from '../../his/material-management/material-out/material-out.component';
import { MaterialInAuditComponent } from '../../his/material-management/material-in-audit/material-in-audit.component';
import { MaterialPriceComponent } from '../../his/material-management/material-price/material-price.component';
import { MaterialPriceAuditComponent } from '../../his/material-management/material-price-audit/material-price-audit.component';
import { InventoryManagementComponent } from '../../his/material-management/inventory-management/inventory-management.component';
import { MaterialReceiveComponent } from '../../his/material-management/material-receive/material-receive.component';
import { MaterialApplyComponent } from '../../his/material-management/material-apply/material-apply.component';
import { MaterialCheckComponent } from '../../his/material-management/material-check/material-check.component';
import { MaterialCheckAuditComponent } from '../../his/material-management/material-check-audit/material-check-audit.component';
import { MaterialDictionaryComponent } from '../../his/material-management/material-dictionary/material-dictionary.component';
import { MaterialManufactureronaryComponent } from '../../his/material-management/material-manufactureronary/material-manufactureronary.component';
import { MaterialSupplierComponent } from '../../his/material-management/material-supplier/material-supplier.component';
import { InfectionFillInComponent } from '../../his/infection-management/infection-fill-in/infection-fill-in.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: 'InfectionFillInComponent', loadChildren: 'src/app/component/his/infection-management/infection-fillin/infection-fillin.module#InfectionFillinModule', data: {
          title: '传染病填报',
          isRemove: true
        }
      },
      {
        path: 'InfectionAuditComponent', loadChildren: 'src/app/component/his/infection-management/infection-audit/infection-audit.module#InfectionAuditModule', data: {
          title: '传染病审核',
          isRemove: true
        }
      },
      // {
      //   path: 'MaterialInComponent', component: MaterialInComponent, data: {
      //     title: '材料入库',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialOutComponent', component: MaterialOutComponent, data: {
      //     title: '材料出库',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialInAuditComponent', component: MaterialInAuditComponent, data: {
      //     title: '材料入库审核',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialPriceComponent', component: MaterialPriceComponent, data: {
      //     title: '材料调价',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialPriceAuditComponent', component: MaterialPriceAuditComponent, data: {
      //     title: '材料调价审核',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'InventoryManagementComponent', component: InventoryManagementComponent, data: {
      //     title: '库存管理',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialReceiveComponent', component: MaterialReceiveComponent, data: {
      //     title: '材料领取确认',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialApplyComponent', component: MaterialApplyComponent, data: {
      //     title: '材料申领',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialCheckComponent', component: MaterialCheckComponent, data: {
      //     title: '材料盘点',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialCheckAuditComponent', component: MaterialCheckAuditComponent, data: {
      //     title: '材料盘点审核',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialDictionaryComponent', component: MaterialDictionaryComponent, data: {
      //     title: '材料字典',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialManufactureronaryComponent', component: MaterialManufactureronaryComponent, data: {
      //     title: '生产厂商维护',
      //     isRemove: true
      //   }
      // }, {
      //   path: 'MaterialSupplierComponent', component: MaterialSupplierComponent, data: {
      //     title: '供应商维护',
      //     isRemove: true
      //   }
      // },
      // {
      //   path: 'InfectionFillInComponent', component: InfectionFillInComponent, data: {
      //     title: '传染病填报',
      //     isRemove: true
      //   }
      // },
      // {
      //   path: 'InfectionAuditComponent', component: InfectionAuditComponent, data: {
      //     title: '传染病审核',
      //     isRemove: true
      //   }
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
