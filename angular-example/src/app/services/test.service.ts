import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getRequest(url: string)
  {
    return this.http.get<HttpResponse<any>>(url, {observe: 'response'});
  }

  postRequest(url: string, body: any)
  {
    return this.http.post<HttpResponse<any>>(url, body, {observe: 'response'});
  }

  deleteRequest(url: string)
  {
    return this.http.delete<HttpResponse<any>>(url, {observe: 'response'});
  }

  putRequest(url: string, body: any)
  {
    return this.http.put<HttpResponse<any>>(url, body, {observe: 'response'});
  }
}
