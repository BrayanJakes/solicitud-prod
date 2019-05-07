import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate  {

  constructor(
    private router: Router) {}

canActivate() {
if ( localStorage.getItem('rol') === 'Administrador') {
return true;
}


this.router.navigate(['dashboard']);

}
}
