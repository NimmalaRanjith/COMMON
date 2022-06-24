import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { AllenquiresComponent } from './allenquires/allenquires.component';



@NgModule({
  declarations: [
    CreateenquiryComponent,
    AllenquiresComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EnquiresModule { }
