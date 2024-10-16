import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Register as a root service
})
export class AdminAuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    // If the user is not authenticated, redirect to the login page
    if (this._authService.user == undefined) {
      return this._router.createUrlTree(['/Login']);
    }

    // If the user is an admin, allow access
    if (this._authService.user.roles.find(r => r == "Admin") == "Admin") {
      return true;
    }

    // If the user is not an admin, redirect to the unauthorized page
    return this._router.createUrlTree(['/UnAuthorized']);
  }
}
