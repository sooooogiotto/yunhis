import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** common模块 */
import { HomePageComponent } from "./component/common/home-page/home-page.component";
import { LoginComponent } from "./component/common/login/login.component";

/** 材料管理模块 */
/** 材料入库 */
import { MaterialInComponent } from "./component/his/material-management/material-in/material-in.component";
/** 材料出库 */
import { MaterialOutComponent } from "./component/his/material-management/material-out/material-out.component";
/** 材料入库 */
import { MaterialInAuditComponent } from "./component/his/material-management/material-in-audit/material-in-audit.component";
/** 材料调价 */
import { MaterialPriceComponent } from "./component/his/material-management/material-price/material-price.component";
/** 材料调价审核 */
import { MaterialPriceAuditComponent } from "./component/his/material-management/material-price-audit/material-price-audit.component";
/** 库存管理 */
import { InventoryManagementComponent } from "./component/his/material-management/inventory-management/inventory-management.component";
/** 材料领取确认 */
import { MaterialReceiveComponent } from "./component/his/material-management/material-receive/material-receive.component";
/** 材料申领 */
import { MaterialApplyComponent } from "./component/his/material-management/material-apply/material-apply.component";
/** 材料盘点 */
import { MaterialCheckComponent } from "./component/his/material-management/material-check/material-check.component";
/** 材料盘点审核 */
import { MaterialCheckAuditComponent } from "./component/his/material-management/material-check-audit/material-check-audit.component";
/** 材料字典 */
import { MaterialDictionaryComponent } from "./component/his/material-management/material-dictionary/material-dictionary.component";
/** 生产厂商维护 */
import { MaterialManufactureronaryComponent } from "./component/his/material-management/material-manufactureronary/material-manufactureronary.component";
/** 供应商维护 */
import { MaterialSupplierComponent } from "./component/his/material-management/material-supplier/material-supplier.component";
/** 材料管理模块 End*/
/** 传染病管理模块 */
import { InfectionFillInComponent } from "./component/his/infection-management/infection-fill-in/infection-fill-in.component";

const routes: Routes = [
  {
    path: 'home', component: HomePageComponent, children: [
      {
        path: 'MaterialInComponent', component: MaterialInComponent, data: {
          title: '材料入库',
          isRemove: true
        }
      }, {
        path: 'MaterialOutComponent', component: MaterialOutComponent, data: {
          title: '材料出库',
          isRemove: true
        }
      }, {
        path: 'MaterialInAuditComponent', component: MaterialInAuditComponent, data: {
          title: '材料入库审核',
          isRemove: true
        }
      }, {
        path: 'MaterialPriceComponent', component: MaterialPriceComponent, data: {
          title: '材料调价',
          isRemove: true
        }
      }, {
        path: 'MaterialPriceAuditComponent', component: MaterialPriceAuditComponent, data: {
          title: '材料调价审核',
          isRemove: true
        }
      }, {
        path: 'InventoryManagementComponent', component: InventoryManagementComponent, data: {
          title: '库存管理',
          isRemove: true
        }
      }, {
        path: 'MaterialReceiveComponent', component: MaterialReceiveComponent, data: {
          title: '材料领取确认',
          isRemove: true
        }
      }, {
        path: 'MaterialApplyComponent', component: MaterialApplyComponent, data: {
          title: '材料申领',
          isRemove: true
        }
      }, {
        path: 'MaterialCheckComponent', component: MaterialCheckComponent, data: {
          title: '材料盘点',
          isRemove: true
        }
      }, {
        path: 'MaterialCheckAuditComponent', component: MaterialCheckAuditComponent, data: {
          title: '材料盘点审核',
          isRemove: true
        }
      }, {
        path: 'MaterialDictionaryComponent', component: MaterialDictionaryComponent, data: {
          title: '材料字典',
          isRemove: true
        }
      }, {
        path: 'MaterialManufactureronaryComponent', component: MaterialManufactureronaryComponent, data: {
          title: '生产厂商维护',
          isRemove: true
        }
      }, {
        path: 'MaterialSupplierComponent', component: MaterialSupplierComponent, data: {
          title: '供应商维护',
          isRemove: true
        }
      },
      {
        path: 'InfectionFillInComponent', component: InfectionFillInComponent, data: {
          title: '传染病填报',
          isRemove: true
        }
      }
    ]
  }, {
    path: 'MaterialInComponent', component: MaterialInComponent, data: {
      title: '材料入库',
      isRemove: true
    }
  }, {
    path: 'MaterialOutComponent', component: MaterialOutComponent, data: {
      title: '材料出库',
      isRemove: true
    }
  }, {
    path: 'MaterialInAuditComponent', component: MaterialInAuditComponent, data: {
      title: '材料入库审核',
      isRemove: true
    }
  }, {
    path: 'MaterialPriceComponent', component: MaterialPriceComponent, data: {
      title: '材料调价',
      isRemove: true
    }
  }, {
    path: 'MaterialPriceAuditComponent', component: MaterialPriceAuditComponent, data: {
      title: '材料调价审核',
      isRemove: true
    }
  }, {
    path: 'InventoryManagementComponent', component: InventoryManagementComponent, data: {
      title: '库存管理',
      isRemove: true
    }
  }, {
    path: 'MaterialReceiveComponent', component: MaterialReceiveComponent, data: {
      title: '材料领取确认',
      isRemove: true
    }
  }, {
    path: 'MaterialApplyComponent', component: MaterialApplyComponent, data: {
      title: '材料申领',
      isRemove: true
    }
  }, {
    path: 'MaterialCheckComponent', component: MaterialCheckComponent, data: {
      title: '材料盘点',
      isRemove: true
    }
  }, {
    path: 'MaterialCheckAuditComponent', component: MaterialCheckAuditComponent, data: {
      title: '材料盘点审核',
      isRemove: true
    }
  }, {
    path: 'MaterialDictionaryComponent', component: MaterialDictionaryComponent, data: {
      title: '材料字典',
      isRemove: true
    }
  }, {
    path: 'MaterialManufactureronaryComponent', component: MaterialManufactureronaryComponent, data: {
      title: '生产厂商维护',
      isRemove: true
    }
  }, {
    path: 'MaterialSupplierComponent', component: MaterialSupplierComponent, data: {
      title: '供应商维护',
      isRemove: true
    }
  },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
