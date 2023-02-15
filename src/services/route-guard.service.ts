import { AuthappService } from './authapp.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.BasicAuth.isLogged())
      this.route.navigate(["login"])

    return this.BasicAuth.isLogged()
  }

  constructor(private BasicAuth: AuthappService, private route: Router) { }
}
