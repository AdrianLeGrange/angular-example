import { componentFactoryName } from '@angular/compiler';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { EnvironmentSensorType, EnvironmentSensorTypeDescriptions } from 'src/app/enums/environment-sensor-type.enum';


@Component({
  selector: 'app-hardware-add',
  templateUrl: './hardware-add.component.html',
  styleUrls: ['./hardware-add.component.css']
})


export class HardwareAddComponent implements OnInit {

  environmentSensorTypes: { name: string, value: EnvironmentSensorType }[] = [];

  systemConfigurationForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    EnvironmentSensorTypeSelect: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    this.populateEnvironmentSensorTypes();
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
}

