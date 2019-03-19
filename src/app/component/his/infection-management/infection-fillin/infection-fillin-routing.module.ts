import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfectionFillinComponent } from './infection-fillin/infection-fillin.component';

const routes: Routes = [
  {
    path: '',
    component: InfectionFillinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfectionFillinRoutingModule { }
