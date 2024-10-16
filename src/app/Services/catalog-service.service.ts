import { Injectable } from '@angular/core';
import { Catalog } from '../Models/Catalog';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {

  catalog: Catalog[] | undefined;

  httpheaders: HttpHeaders;

  constructor(private httpclient: HttpClient) {
    this.httpheaders = new HttpHeaders({ 'content-type': 'application/json' });
  }

  private HandleError(error: HttpErrorResponse) {
    console.error('An Error Occured', error.error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  GetCatalague(): Observable<HttpResponse<Catalog[]>> {
    return this.httpclient.get<Catalog[]>(environment.apiAddress + '/Catalog/GetAll', {
      headers: this.httpheaders,
      observe: 'response'
    }).pipe(
      catchError(this.HandleError)
    );
  }



}
