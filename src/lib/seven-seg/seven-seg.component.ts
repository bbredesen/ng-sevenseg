import { Component, Directive, Input, OnInit, AfterViewInit, ElementRef, ViewChildren, Renderer2, QueryList } from '@angular/core';
import { SevenSegDigitComponent } from './seven-seg-digit.component';

@Component({
  selector: 'seven-seg',
  templateUrl: './seven-seg.component.html',
  styleUrls: ['./seven-seg.component.css']
})
export class SevenSegComponent implements AfterViewInit {
  @Input() private value : number;
  @Input() private digits : number;
  @Input() private decimalPlaces : number; // null = floating?

  @ViewChildren('digit') digitComponents : QueryList<SevenSegDigitComponent>;

  allDigits : Array<number>;

  constructor() {
    this.value = null;
    this.digits = 1;
    this.decimalPlaces = 0;
  }
  ngOnInit() {
    this.allDigits = [];
    for (var i = 0; i<this.digits;i++) { this.allDigits.push(i); }
  }

  ngAfterViewInit() {
    this.renderAll();
  }

  renderAll() {
    console.log("render value: (" + this.value + ") null? " + (this.value==null));
    // Special case: if value attribut is null or not given, blank the display
    if (this.value == null) {
      this.digitComponents.forEach( comp => comp.digit = null );
      return;
    }

    var value = this.value * Math.pow(10,this.decimalPlaces); // shift out decimals from the value

    var digits = this.digits; // declared to put in scope of forEach
    var targetIdx = -1; // targetIdx is where the decimal place will be shown
    if (this.decimalPlaces > 0)
      targetIdx = this.digits - this.decimalPlaces-1;

    let leadingZero = true;
    this.digitComponents.forEach(function(comp, idx) {
      comp.showDecimal = (idx == targetIdx);
      let curDigit = value / Math.pow(10, (digits-idx-1));
      value = value % Math.pow(10, (digits-idx-1));

      // console.log('CurDigit:', curDigit, 'next value:', value, 'idx', idx);
      if (Math.floor(curDigit) > 0) leadingZero = false;

      if (value == null || (leadingZero && idx < digits-1)) comp.digit = null;
      else if (idx == digits-1) comp.digit = Math.round(curDigit);
      else comp.digit = Math.floor(curDigit);

    });
  }

  set (value : number) {
    let decimalFactor = Math.pow(10, this.decimalPlaces);
    this.value = Math.round(value * decimalFactor) / decimalFactor;
    this.renderAll();
  }
  get (value) { return this.value; }

}
