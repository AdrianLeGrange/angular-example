import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getRequest(url: string)
  { 
    let myHeaders = new HttpHeaders();
  myHeaders = myHeaders.set('Access-Control-Allow-Origin', '*');
  //myHeaders = myHeaders.append('Access-Control-Allow-Origin', '*'); 
console.log(myHeaders);
    return this.http.get<HttpResponse<any>>(url, {observe: 'response',  'headers': myHeaders});
  //return this.http.get<HttpResponse<any>>(url, {observe: 'response',  headers: {'Access-Control-Allow-Origin':'*'}});
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
