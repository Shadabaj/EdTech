import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { category } from '../Models/Category';
import { environment } from 'src/Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpheaders: HttpHeaders
  constructor(private httpclient: HttpClient) {
    this.httpheaders = new HttpHeaders({ 'content-type': 'application/json' });
  }


  private handleerror(error:HttpErrorResponse){
    console.error('An Error Occured',error.error)
    return throwError (()=>new Error('Something Bad Happened Please Try Again Later'))
  }

  GetCategories(): Observable<HttpResponse<category[]>> {
    return this.httpclient.get<category[]>(environment.apiAddress + "/Category/GetAll",
      {
        headers: this.httpheaders,
        observe: 'response'
      }).pipe(
        catchError(this.handleerror)
      );
  }
}
