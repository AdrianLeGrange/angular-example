import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ConfigurationWizardComponent } from './components/configuration-wizard/configuration-wizard.component';
import { HardwareDashboardComponent } from './components/hardware-dashboard/hardware-dashboard.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'configuration-wizard', component: ConfigurationWizardComponent},
  { path: 'test', component: TestComponent},
  { path: 'hardware-dashboard', component: HardwareDashboardComponent},
  { path: '**', component:  ConfigurationWizardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [ConfigurationWizardComponent]
})
export class AppRoutingModule { }
