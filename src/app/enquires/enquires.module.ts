import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { AllenquiresComponent } from './allenquires/allenquires.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateenquiryComponent,
    AllenquiresComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    CreateenquiryComponent,
    AllenquiresComponent,
  ]
})
export class EnquiresModule { }
