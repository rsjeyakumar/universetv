import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CalendarModule,
    TableModule,
    DialogModule,
    ToastModule
  ],
  exports: [CalendarModule, TableModule, DialogModule, ToastModule, CardModule, AccordionModule,
    CarouselModule, PanelModule, ButtonModule, RatingModule]
})
export class PrimengModule { }
