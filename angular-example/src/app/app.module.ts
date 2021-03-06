// Components
import { AppComponent } from './app.component';
import { ConfigurationWizardComponent } from './components/configuration-wizard/configuration-wizard.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SystemConfigurationComponent } from './components/configuration-wizard/steps/system-configuration/system-configuration.component';
import { FanConfigurationComponent } from './components/configuration-wizard/steps/fan-configuration/fan-configuration.component';

// Material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { ReactiveFormsModule } from '@angular/forms';
import { TestCompComponent } from './components/configuration-wizard/steps/test-comp/test-comp.component';
import { FlexModule } from '@angular/flex-layout';
import { NumbersOnlyDirective } from '../app/directives/numbers-only.directive';
import { TestComponent } from './components/test/test.component';
import { HttpClientModule} from '@angular/common/http';
import { PluginsComponent } from './components/plugins/plugins.component';
import { HardwareAddComponent } from './components/hardware-add/hardware-add.component';
import { PluginMappingComponent } from './components/plugin-mapping/plugin-mapping/plugin-mapping.component';


//Module class decorator to define a Angular Module and provide metadata about the module.
@NgModule({
  declarations: [       //Declare App component imported above in array
    AppComponent,
    ConfigurationWizardComponent,
    SystemConfigurationComponent,
    FanConfigurationComponent,
    TestCompComponent,
    NumbersOnlyDirective,
    TestComponent,
    PluginsComponent,
    HardwareAddComponent,
    PluginMappingComponent,
  ],
  imports: [              //Add all the other Angular Modules that this module uses in the "import" array
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]     //AppComponent to be loaded when Angular starts.
})
export class AppModule { }
