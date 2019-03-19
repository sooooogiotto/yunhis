import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfectionAuditComponent } from './infection-audit/infection-audit.component';

const routes: Routes = [
  {
    path: '',
    component: InfectionAuditComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfectionAuditRoutingModule { }
