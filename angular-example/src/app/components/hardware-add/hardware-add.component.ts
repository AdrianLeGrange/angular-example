//Import required external Classes/Functions
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { HttpErrorResponse } from '@angular/common/http';
import { componentFactoryName, identifierModuleUrl } from '@angular/compiler';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';


import { PluginType, PluginTypeDescriptions } from 'src/app/enums/plugin-type.enum';
import { PluginService } from 'src/app/services/hardware.service';

//Decorator - Provides the component with the View to display & Metadata about the Component. 
//Must be bofore class definition.
@Component({
  selector: 'app-hardware-add',                 //path  app/hardware-add
  templateUrl: './hardware-add.component.html', //view - .html file
  styleUrls: ['./hardware-add.component.css']   //view stylesheet
})

//Class - Create Class, "export" allow other classes to inport this class
export class HardwareAddComponent implements OnInit {

  environmentSensorTypes: { name: string, value: PluginType }[] = [];
  environmentSensorPorts: { name: string, value: number }[] = [];

  form = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    HardwareType: new FormControl(2, [Validators.required]),   
    HardwarePort: new FormControl('', [Validators.required]),
  });

  constructor(private pluginService: PluginService) {
    console.debug("Initial:",this.form.controls.HardwareType.value);
   } 

  ngOnInit(): void {
    this.populateEnvironmentSensorTypes();
    this.populateEnvironmentSensorPorts();
    
    

  }

  populateEnvironmentSensorTypes() {
    this.environmentSensorTypes = [];
    Object.keys(PluginType).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.environmentSensorTypes.push(
        {
          name: PluginTypeDescriptions.get(+value) ?? '',
          value: +value
        });

        
    });
  }


  populateEnvironmentSensorPorts() {
    this.environmentSensorPorts = [];
    this.environmentSensorPorts.push( {name: "port1", value: 1}, {name: "port2", value: 2}, {name: "port3", value: 3} );
    
  }

  loadAvailablePorts() {
    this.pluginService.getPorts().subscribe((numbers: number[]) => {
      this.environmentSensorPorts = [];
      numbers.forEach((number) => {
        this.environmentSensorPorts.push( {name: "Port " + number, value: number})
      });
    },
    (error: HttpErrorResponse) => {
      
    });
  }

  typeSelected(){
    console.log("Type selected");

this.environmentSensorPorts.push( {name: "portx", value: 4} );
var ports = this.environmentSensorPorts;

//this.environmentSensorPorts = [];

//this.environmentSensorPorts.concat(ports);
console.debug("Selection:",this.form.controls.HardwareType.value);
  }


getValue(select:{name:string, value:number}){
  return select.value;

}


}

