import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { HardwareModule } from '../models/hardware-module.model'; //Defined the "HardwareModule" type object

// Other
import { Endpoints } from '../constants/endpoints'; //Define the ip & path to use for for http.Get below

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http: HttpClient) { }

  getHardware(): Observable<HardwareModule[]>   //Create observable with subscriber function (Function publish values) (Called when consumer call subscribe() methode) 
  { 
    return this.http.get<HardwareModule[]>(Endpoints.Hardware.getHardware); //subcsriber function -GET data from server Endpoint
  }

  addHardware(module: HardwareModule): Observable<boolean> 
  {
    return this.http.post<boolean>(Endpoints.Hardware.addHardware, module); //subscriber function -POST data to server endpoint
  }

  getPorts(): Observable<number[]>
  { 
    return this.http.get<number[]>(Endpoints.Hardware.getPorts);
  }
}


