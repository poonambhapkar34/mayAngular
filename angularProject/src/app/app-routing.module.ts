import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PopupComponent } from './popup/popup/popup.component';
import { Popup2Component } from './popup/popup2/popup2.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'logout', component: LogoutComponent},
  {path:'test', component:TestComponent},

  //{path:'**', component:PagenotfoundComponent}
 {path:'', redirectTo:'/home' , pathMatch:'full'},
  {path: 'home' , component: HomeComponent},
  {path: 'popup' , component:PopupComponent},
  {path: 'popup2' , component: Popup2Component}, 

  // {path:'**', component:PagenotfoundComponent}
  {path: 'student', loadChildren:()=>import('./student/student.module').then(modu=>modu.StudentModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path: 'about', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
