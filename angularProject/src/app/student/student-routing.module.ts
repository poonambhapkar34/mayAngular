import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';

const routes: Routes = [
  {path:'studentLogin', component:StudentloginComponent},
  {path:'studentLogin', component:StudentlogoutComponent},

  // {path:'**', component:PagenotfoundComponent}
  // {path:'', redirectTo:'/home' , pathMatch:'full'},
  // {path: 'home' , component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
