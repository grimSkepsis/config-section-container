import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ConfigurationSectionComponent } from './configurationSectionComponent';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ConfigurationSectionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
