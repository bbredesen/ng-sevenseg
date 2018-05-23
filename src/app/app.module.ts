import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SevenSegModule } from '@seven-seg';
// import { SevenSegDigitComponent } from './seven-seg/seven-seg-digit/seven-seg-digit.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, SevenSegModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
