import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

import { loginGet } from 'src/app/Models/login';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiUrl;
  // Gets

  getAuthenticationUrl = this.apiUrl + 'login/Get/%7Busername,password%7D?';
  constructor(private http: HttpClient) { }

  getAuthentication(userName: string, password: string): Observable<loginGet[]> {
    let params = new HttpParams().set('userName', userName);
    params = params.set('password', password);
    return this.http.get<loginGet[]>(this.getAuthenticationUrl, { params });
  }
}
