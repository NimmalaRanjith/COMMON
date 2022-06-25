import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AllenquiresComponent } from './enquires/allenquires/allenquires.component';
import { CreateenquiryComponent } from './enquires/createenquiry/createenquiry.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'createenquiry',component:CreateenquiryComponent},
    {path:'allenquires',component:AllenquiresComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
