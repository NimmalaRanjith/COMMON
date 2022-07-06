import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  createlogin(loginform:any):Observable<any>
  {
    return this.httpClient.post("https://reqres.in/api/login",loginform);
  }
}
