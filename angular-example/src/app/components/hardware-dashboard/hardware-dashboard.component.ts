import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Services
import { HardwareService } from 'src/app/services/hardware.service';

// Models
import { HardwareModule } from 'src/app/models/hardware-module.model';

@Component({
  selector: 'app-hardware-dashboard',
  templateUrl: './hardware-dashboard.component.html',
  styleUrls: ['./hardware-dashboard.component.css']
})
export class HardwareDashboardComponent implements OnInit {
  displayedColumns: string[] = ['description', 'type', 'port'];
  dataSource = new MatTableDataSource<HardwareModule>([]);

  constructor(private hardwareService: HardwareService) { }

  ngOnInit(): void
  {
    this.loadHardware();
  }

  loadHardware()
  {
    this.hardwareService.getHardware().subscribe((hardware: HardwareModule[]) => {
      this.dataSource = new MatTableDataSource<HardwareModule>(hardware);
    });
  }
}
