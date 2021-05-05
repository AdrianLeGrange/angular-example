import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getRequest(url: string)
  { 

     let myHeaders = new HttpHeaders()
console.log(myHeaders);
      return this.http.get<HttpResponse<any>>(url, {observe: 'response',  'headers': myHeaders});
  }

  postRequest(url: string, body: any)
  {
        //Make it a "simple request" so it don't send the preflight "OPTION" request
        //Change headers "content-type" to "plain/text" so OPTION request is not send, but only the POST is send
        //OPTION is NOT supported by the "simplelink" module!
    const /*let*/ myHeaders = new HttpHeaders()
    .set("content-type", "text/plain");
    //.delete("Accept", "application/json")
    //.set("Accept", "text/plain")
    //.set("Access-Control_Allow-Origin", "/*");

    return this.http.post<HttpResponse<any>>(url, body, {observe: 'response', 'headers': myHeaders});
  }

  deleteRequest(url: string)
  {
    //Delete & PUT can NOT be "simple" requests ???????????
    const myHeaders1 = new HttpHeaders()
    .set("content-type", "text/plain");

   //.delete("content-type", "text/plain");
   // .delete("Accept", "text/plain")
    //.set("Accept", "text/plain")
   // .set("Access-Control_Allow-Origin", "*");

console.log(myHeaders1.get("content-type"));
    return this.http.delete<HttpResponse<any>>(url, {observe: 'response', 'headers': myHeaders1});
  }

  putRequest(url: string, body: any)
  {
    return this.http.put<HttpResponse<any>>(url, body, {observe: 'response'});
  }
}
