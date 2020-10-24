import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    SettingsRoutingModule
  ],
  providers: [],
  bootstrap: [SettingsComponent]
})
export class SettingsModule { }
