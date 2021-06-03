import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Services
import { PluginService } from 'src/app/services/hardware.service';

// Models
import { PluginModuleType } from 'src/app/models/plugin-module.model';
import { HardwareAddComponent } from '../hardware-add/hardware-add.component';

@Component({                                                    //Decorator marks class as Angular component
  selector: 'app-hardware-dashboard',                           //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  templateUrl: './hardware-dashboard.component.html',           //The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  styleUrls: [ './hardware-dashboard.component.css' ]           //One or more inline CSS stylesheets to use in this component.
})

export class HardwareDashboardComponent implements OnInit {
  displayedColumns: string[] = ['description', 'type', 'port'];
  dataSource = new MatTableDataSource<Plugin>([]);      //Create a variable "dataSource" array of type MatTableDataSource. Used in html

  constructor(private pluginService: PluginService) { }     //Create instance of "HardwareService"

  ngOnInit(): void                                              //Execute when page is loaded
  {
    this.loadHardware();                                        //Load required data from server
  }

  loadHardware()                                                //Function to get hardware data from server
  {
    this.pluginService.getPlugin().subscribe((hardware: Plugin[]) => {   //Subscribe to getHardware - subscribe returns a "HardwareModule" data => inline function
      this.dataSource = new MatTableDataSource<Plugin>(hardware);            //Inline function copy data into this.dataSource (variable for table data)
    });
  }


  onAddRequest() {                                            //"Add" button event handler
    console.log("User clicked \"Add\" button!");
    HardwareAddComponent;
  }
 
}






