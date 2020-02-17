import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimengModule } from '../../shared/primeng/primeng.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MemberRoutingModule,
    SharedModule,
    PrimengModule
  ]
})
export class MemberModule { }
