import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Models
import { HardwareModule } from '../models/hardware-module.model';

// Other
import { Endpoints } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor(private http: HttpClient) { }

  getHardware(): Observable<HardwareModule[]>
  { 
    return this.http.get<HardwareModule[]>(Endpoints.Hardware.getHardware);
  }

  addHardware(module: HardwareModule): Observable<boolean> 
  {
    return this.http.post<boolean>(Endpoints.Hardware.addHardware, module);
  }
}


