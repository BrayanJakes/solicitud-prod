import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PagesComponent } from './components/pages/pages.component';


import { LogeadoGuard } from './guard/logeado.guard';
import { AdminGuard } from './guard/admin.guard';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { TsolicitudComponent } from './components/tsolicitud/tsolicitud.component';
import { SettingComponent } from './components/setting/setting.component';
import { ViewsolicitudComponent } from './components/viewsolicitud/viewsolicitud.component';





const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [LogeadoGuard]},
  {path: 'solicitud/:nuevo', component: SolicitudComponent, canActivate: [LogeadoGuard]},
  {path: 'config/:id', component: SettingComponent, canActivate: [LogeadoGuard]},
  {path: 'tsolicitud', component: TsolicitudComponent, canActivate: [LogeadoGuard, AdminGuard]},
  {path: 'viewsolicitud/:id', component: ViewsolicitudComponent, canActivate: [LogeadoGuard]},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



