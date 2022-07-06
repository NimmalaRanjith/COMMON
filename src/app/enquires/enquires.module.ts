import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CreateenquiryComponent } from './createenquiry/createenquiry.component';
import { AllenquiresComponent } from './allenquires/allenquires.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateenquiryComponent,
    AllenquiresComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  exports: [
    CreateenquiryComponent,
    AllenquiresComponent,
    
  ]
})
export class EnquiresModule { }
