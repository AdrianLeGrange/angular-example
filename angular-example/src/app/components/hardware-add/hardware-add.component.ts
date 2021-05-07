import { Component, OnInit } from '@angular/core';
//import { Select} from '@angular/material/select/public-api'

import { EnvironmentSensorType, EnvironmentSensorTypeDescriptions } from 'src/app/enums/environment-sensor-type.enum';

@Component({
  selector: 'app-hardware-add',
  templateUrl: './hardware-add.component.html',
  styleUrls: ['./hardware-add.component.css']
})
export class HardwareAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
