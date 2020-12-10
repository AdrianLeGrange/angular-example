import { Component, OnInit, ViewChild } from '@angular/core';
import { FanConfigurationComponent } from './steps/fan-configuration/fan-configuration.component';
import { SystemConfigurationComponent } from './steps/system-configuration/system-configuration.component';

@Component({
  selector: 'app-configuration-wizard',
  templateUrl: './configuration-wizard.component.html',
  styleUrls: ['./configuration-wizard.component.css']
})
export class ConfigurationWizardComponent implements OnInit {
  // One way of getting the configured values from each of the steps is to create a save function inside each component that returns the
  // object represented by that component
  @ViewChild(SystemConfigurationComponent) systemConfigurationComponent!: SystemConfigurationComponent;
  @ViewChild(FanConfigurationComponent) fanConfigurationComponent!: FanConfigurationComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
