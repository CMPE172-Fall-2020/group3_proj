import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectInfoComponent } from './collect-info/collect-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent},
  { path: 'register/1', component: CollectInfoComponent },
  { path: 'dashboard/user', component: DashboardComponent }, 
  { path: 'login/user', component: LoginScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
