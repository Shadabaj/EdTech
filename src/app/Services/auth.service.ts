import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http'
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/Environment/Environment';
import { Login } from '../Models/Login';
import { SignUp } from '../Models/SignUp'
import { AUTH_ID } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | undefined;
  httpheaders: HttpHeaders;

  constructor(private httpclient: HttpClient) {
    this.httpheaders = new HttpHeaders({ 'content-type': 'application/json' });
    this.loadUser();
  }

  private handleerror(error: HttpErrorResponse) {
    console.error('An Error Occured', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  private loadUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data != null) {
      this.user = JSON.parse(data);
    }
    else {
      this.user = undefined;
    }
  }

  ValidateUser(model: Login): Observable<HttpResponse<User>> {
    return this.httpclient.post<User>(environment.apiAddress + "/Auth/ValidateUser", JSON.stringify(model), {
      headers: this.httpheaders,
      observe: 'response'
    }).pipe(
      catchError(this.handleerror)
    );
  }

  UserSignUp(model: SignUp): Observable<HttpResponse<User>> {
    return this.httpclient.post<User>(environment.apiAddress + "/Auth/CreateUser", JSON.stringify(model), {
      headers: this.httpheaders, observe: 'response'
    }).pipe(
      catchError(this.handleerror)
    );
  }

  SetAuthUser(user: User) {
    localStorage.setItem(AUTH_ID, JSON.stringify(user));
    // this.loadUser();
    //OR
    this.user = user;// To Retreived the Authentication
  }

  RemoveAuthUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data != null) {
      localStorage.removeItem(AUTH_ID)
    }
    this.loadUser();
  }

}
