import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfectionDetailComponent } from './infection-detail/infection-detail.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [
    InfectionDetailComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    InfectionDetailComponent
  ]
})
export class InfectionDetailModule { }
