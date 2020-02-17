import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from '../services/httpservice.service';
import { AuthGuardService } from '../services/auth-guard.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AlertComponent, LoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpserviceService, AuthGuardService],
  exports: [HeaderComponent, FooterComponent,
    FormsModule, ReactiveFormsModule,
    HttpClientModule, AlertComponent, LoaderComponent]
})
export class SharedModule { }
