import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LightSource, LightSourceDescriptions } from 'src/app/enums/light-source.enum';
import { MainsVoltage, MainsVoltageDescriptions } from 'src/app/enums/mains-voltage.enum';
import { HydroEnvironment, HydroEnvironmentDescriptions } from 'src/app/enums/hydro-environment.enum';
import { HydroSystem, HydroSystemDescriptions } from 'src/app/enums/hydro-system.enum';
import { LengthUnit, LengthUnitDescriptions } from 'src/app/enums/length-unit.enum';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.component.html',
  styleUrls: ['./system-configuration.component.css']
})
export class SystemConfigurationComponent implements OnInit {
  lightSources: { name: string, value: LightSource }[] = [];
  mainsVoltages: { name: string, value: MainsVoltage }[] = [];
  hydroEnvironments: { name: string, value: HydroEnvironment }[] = [];
  hydroSystems: { name: string, value: HydroSystem }[] = [];
  lengthUnits:{ name: string, value: LengthUnit }[] = [];

  systemConfigurationForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    lightSourceSelect: new FormControl('', [Validators.required]),
    mainsVoltageSelect: new FormControl('', [Validators.required]),
    hydroEnvironmentSelect: new FormControl('', [Validators.required]),
    hydroSystemSelect: new FormControl('', [Validators.required]),
    lengthUnitSelect: new FormControl('', [Validators.required]),
    growingAreaLengthX: new FormControl('', [Validators.required]),
    growingAreaLengthY: new FormControl('', [Validators.required]),
    growingAreaLengthZ: new FormControl('', [Validators.required]),
    growAreaUnitSelect: new FormControl('', [Validators.required]),

  });

  constructor() { }

  ngOnInit(): void {
    this.populateLightSources();
    this.populateMainsVoltages();
    this.populateHydroEnvironments();
    this.populateHydroSystems();
    this.populateLengthUnits();
  }

  populateLightSources() {
    this.lightSources = [];
    Object.keys(LightSource).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.lightSources.push(
        { 
          name: LightSourceDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }

  populateMainsVoltages() {
    this.mainsVoltages = [];
    Object.keys(MainsVoltage).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.mainsVoltages.push(
        { 
          name: MainsVoltageDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }

  populateHydroEnvironments() {
    this.hydroEnvironments = [];
    Object.keys(HydroEnvironment).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.hydroEnvironments.push(
        { 
          name: HydroEnvironmentDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }

  populateHydroSystems() {
    this.hydroEnvironments = [];
    Object.keys(HydroSystem).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.hydroSystems.push(
        { 
          name: HydroSystemDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }


  populateLengthUnits() {
    this.lengthUnits = [];
    Object.keys(LengthUnit).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.lengthUnits.push(
        { 
          name: LengthUnitDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }





 
}
