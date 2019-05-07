import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from '../components/login/login.component';
import { LogearService } from '../services/logear.service';

@Injectable()
export class LogeadoGuard implements CanActivate  {

  constructor(private login: LogearService,
              private router: Router) {}

  canActivate() {
      if ( this.login.estaLogueado()) {
        return true;
      }



      this.router.navigate(['login']);
      return false;

  }
}
