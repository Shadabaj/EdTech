import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  user: User | undefined;

  constructor(private _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
    this.user = this._authService.user;
    if (this.user != undefined) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.user.token}`
        }
      });
    }
    return next.handle(req);
  }

}
