import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AirFlowUnit, AirFlowUnitDescriptions } from 'src/app/enums/air-flow-unit.enum';

@Component({
  selector: 'app-fan-configuration',
  templateUrl: './fan-configuration.component.html',
  styleUrls: ['./fan-configuration.component.css']
})
export class FanConfigurationComponent implements OnInit {
  fanConfigurationForm = new FormGroup({
    flowRateInput: new FormControl(AirFlowUnit.CFM, [Validators.required, Validators.min(1), Validators.max(100)]),
    //systemTypeSelect: new FormControl(SystemType.Greenhouse),
  });

  airFlowRates: { name: string, value: AirFlowUnit }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.populateAirflowRates();
  }

  populateAirflowRates() {
    this.airFlowRates = [];
    Object.keys(AirFlowUnit).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.airFlowRates.push(
        { 
          name: AirFlowUnitDescriptions.get(+value) ?? '',
          value: +value
        });
    });
  }
}
