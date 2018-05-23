import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenSegComponent } from './seven-seg.component';
import { SevenSegDigitComponent } from './seven-seg-digit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SevenSegComponent, SevenSegDigitComponent ],
  exports: [ SevenSegComponent ]
})
export class SevenSegModule { }
