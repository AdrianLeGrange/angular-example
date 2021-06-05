import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Services
import { PluginService } from 'src/app/services/hardware.service';

// Models
import { Router } from '@angular/router';
import { NavigationRoutes } from 'src/app/constants/navigation-routes';

@Component({                                                    //Decorator marks class as Angular component
  selector: 'app-plugins',                           //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  templateUrl: './plugins.component.html',           //The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  styleUrls: [ './plugins.component.css' ]           //One or more inline CSS stylesheets to use in this component.
})

export class PluginsComponent implements OnInit {
  displayedColumns: string[] = ['description', 'type', 'port'];
  dataSource = new MatTableDataSource<Plugin>([]);      //Create a variable "dataSource" array of type MatTableDataSource. Used in html

  constructor(private pluginService: PluginService, private router: Router) { }     //Create instance of "HardwareService"

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
  
  onChangeConfiguration() {                                            // Change Configuration on click event handler
    this.router.navigateByUrl(NavigationRoutes.Plugins.PluginMapping);
  }
}