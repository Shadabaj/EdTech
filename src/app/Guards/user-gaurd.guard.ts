import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Register the guard as a root service
})
export class UserAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    // If the user is not authenticated, redirect to the login page
    if (this._authService.user == undefined) {
      return this._router.createUrlTree(['/Login']);
    }

    // If the user has the "User" role, allow access
    if (this._authService.user?.roles.find(u => u === "User")=="User") {
      return true;
    }
    
    // If the user does not have the "User" role, redirect to the unauthorized page
    return this._router.createUrlTree(['/UnAuthorized']);
  }
}
