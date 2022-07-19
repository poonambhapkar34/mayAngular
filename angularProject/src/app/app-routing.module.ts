import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},

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
