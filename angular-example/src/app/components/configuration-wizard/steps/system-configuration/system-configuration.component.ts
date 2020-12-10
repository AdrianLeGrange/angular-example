import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SystemType, SystemTypeDescription } from 'src/app/enums/system-type.enum';
import { SystemConfiguration } from 'src/app/models/system-configuration.model';

@Component({
  selector: 'app-system-configuration',
  templateUrl: './system-configuration.component.html',
  styleUrls: ['./system-configuration.component.css']
})
export class SystemConfigurationComponent implements OnInit {
  systemTypes: { name: string, value: SystemType }[] = [];

  systemConfigurationForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required]),
    systemTypeSelect: new FormControl(SystemType.Greenhouse),
  });

  constructor() { }

  ngOnInit(): void {
    this.populateSystemTypes();
  }

  populateSystemTypes() {
    this.systemTypes = [];
    Object.keys(SystemType).filter((key: string | number) => !isNaN(Number(key))).forEach(value => {
      this.systemTypes.push(
        { 
          name: SystemTypeDescription.get(+value) ?? '',
          value: +value
        });
    });
  }

  save(): SystemConfiguration {
    return {
      name: this.systemConfigurationForm.controls.nameInput.value,
      type: this.systemConfigurationForm.controls.systemTypeSelect.value
    }
  }
}
