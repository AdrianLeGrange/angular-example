import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ConfigurationWizardComponent } from './components/configuration-wizard/configuration-wizard.component';

const routes: Routes = [
  { path: 'configuration-wizard', component: ConfigurationWizardComponent},
  { path: '**', component:  ConfigurationWizardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [ConfigurationWizardComponent]
})
export class AppRoutingModule { }
