import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { TsolicitudComponent } from './components/tsolicitud/tsolicitud.component';
import { PagesComponent } from './components/pages/pages.component';
import { LogeadoGuard } from './guard/logeado.guard';
import { SettingComponent } from './components/setting/setting.component';
import { ViewsolicitudComponent } from './components/viewsolicitud/viewsolicitud.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    SolicitudComponent,
    TsolicitudComponent,
    PagesComponent,
    SettingComponent,
    ViewsolicitudComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [LogeadoGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
