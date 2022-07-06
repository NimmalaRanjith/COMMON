import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private httpclient:HttpClient) { }
  getenquiry():Observable<any>
  {
    return this.httpclient.get('https://62b9299dff109cd1dc8ca34f.mockapi.io/enquires')
  }
  createenquiry(enquiry:any):Observable<any>
  {
    return this.httpclient.post('https://62b9299dff109cd1dc8ca34f.mockapi.io/enquires',enquiry)
  }
  deleteenquiry(id:string):Observable<any>
  {
    return this.httpclient.delete('https://62b9299dff109cd1dc8ca34f.mockapi.io/enquires'+"/"+id)
  }
}
