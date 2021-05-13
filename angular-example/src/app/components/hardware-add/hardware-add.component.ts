import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { componentFactoryName, identifierModuleUrl } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';


import { EnvironmentSensorType, EnvironmentSensorTypeDescriptions } from 'src/app/enums/environment-sensor-type.enum';


@Component({
  selector: 'app-hardware-add',
  templateUrl: './hardware-add.component.html',
  styleUrls: ['./hardware-add.component.css']
})


export class HardwareAddComponent implements OnInit {

  environmentSensorTypes: { name: string, value: EnvironmentSensorType }[] = [];
  environmentSensorPorts: { name: string, value: number }[] = [];
  showMe : boolean = false;
  selected2 : number = 2;

  systemConfigurationForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    EnvironmentSensorTypeSelect: new FormControl('', [Validators.required]),
    EnvironmentSensorPortSelect: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    this.populateEnvironmentSensorTypes();
    this.populateEnvironmentSensorPorts();
    this.showMe = false;
    this.selected2 = 2;
    

  }

  populateEnvironmentSensorTypes() {
    this.environmentSensorTypes = [];
    Object.keys(EnvironmentSensorType).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.environmentSensorTypes.push(
        {
          name: EnvironmentSensorTypeDescriptions.get(+value) ?? '',
          value: +value
        });

        
    });
  }


  populateEnvironmentSensorPorts() {
    this.environmentSensorPorts = [];
    this.environmentSensorPorts.push( {name: "port1", value: 1}, {name: "port2", value: 2}, {name: "port3", value: 3} );
    
  }

  typeSelected(){
    console.log("Type selected");
this.showMe = !this.showMe;       
  }


}

