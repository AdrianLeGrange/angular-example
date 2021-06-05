import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Constants } from 'src/app/constants/constants';
import { NavigationRoutes } from 'src/app/constants/navigation-routes';
import { PluginType, PluginTypeDescriptions } from 'src/app/enums';
import { Port } from 'src/app/models/port.model';

@Component({
  selector: 'app-plugin-mapping',
  templateUrl: './plugin-mapping.component.html',
  styleUrls: ['./plugin-mapping.component.css']
})
export class PluginMappingComponent implements OnInit {
  data = Constants.Ports;
  displayedColumns = ["port", "pluginList"];
  dataSource = new MatTableDataSource<Port>(this.data);


  constructor(private router : Router) {

   }

  ngOnInit(): void {

this.data.splice(0, 1); //Delete port1

  }

  getPluginTypesDescription(pluginTypes: PluginType[]): string {
      let description = '';
      pluginTypes.forEach(pluginType => {
        description += PluginTypeDescriptions.get(pluginType) + ', ';
      });
      return description.slice(0, -2);
  }

  onCheckConfiguration(){
    this.router.navigateByUrl(NavigationRoutes.Plugins.Root);
  }

}
