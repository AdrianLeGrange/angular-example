import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ConfigurationWizardComponent } from './components/configuration-wizard/configuration-wizard.component';
import { PluginsComponent } from './components/plugins/plugins.component';
import { HardwareAddComponent } from './components/hardware-add/hardware-add.component';
import { TestComponent } from './components/test/test.component';
import { PluginMappingComponent } from './components/plugin-mapping/plugin-mapping/plugin-mapping.component';
import { NavigationRoutes } from './constants/navigation-routes';

const routes: Routes = [
  { path: NavigationRoutes.Configuration.ConfigurationWizard, component: ConfigurationWizardComponent},
  { path: 'test', component: TestComponent},
  { path: NavigationRoutes.Plugins.Root, component: PluginsComponent},
  { path: 'hardware-add', component: HardwareAddComponent},
  { path: NavigationRoutes.Plugins.PluginMapping, component: PluginMappingComponent},
  { path: '**', component:  ConfigurationWizardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [ConfigurationWizardComponent]
})
export class AppRoutingModule { }
