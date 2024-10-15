import { Injectable } from '@angular/core';
import { User } from '../Models/user';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
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

  constructor(private httpclinet: HttpClient) {
    this.httpheaders = new HttpHeaders({ 'content-type': 'application/json' });
    this.LoadUser();
  }


  private LoadUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data != undefined) {
      this.user = JSON.parse(data);
    }
    else {
      this.user = undefined;
    }
  }

  ValidateUser(model: Login): Observable<HttpResponse<User>> {
    return this.httpclinet.post<User>(environment.apiAddress + "/Auth/ValidateUser", JSON.stringify(model), {
      headers: this.httpheaders,
      observe: 'response'
    });
  }

  UserSignUp(model: SignUp): Observable<HttpResponse<User>> {
    return this.httpclinet.post<User>(environment.apiAddress + '/Auth/CreateUser', JSON.stringify(model), {
      headers: this.httpheaders,
      observe: 'response'
    })
  };


  setAuthUser(user: User) {
    localStorage.setItem(AUTH_ID, JSON.stringify(user));
    //this.user=user;
    this.LoadUser();
  }

  RemoveAuthUser() {
    const data = localStorage.getItem(AUTH_ID);
    if (data != undefined) {
      localStorage.removeItem(AUTH_ID);
    }
    this.LoadUser();
  }


}