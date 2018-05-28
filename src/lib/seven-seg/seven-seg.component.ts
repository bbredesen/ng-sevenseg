import { Component, Directive, Input, OnInit, Injectable, AfterViewInit, ElementRef, ViewChildren, Renderer2, QueryList } from '@angular/core';
import { SevenSegDigitComponent } from './seven-seg-digit.component';

@Injectable()
@Component({
  selector: 'seven-seg',
  templateUrl: './seven-seg.component.html',
  styleUrls: ['./seven-seg.component.css']
})
export class SevenSegComponent implements AfterViewInit {
  // @Input('value')
  _value : number;
  @Input() digits : number;
  @Input() decimalPlaces : number; // null = floating?

  @Input() class : string = '';

  @ViewChildren('digit') digitComponents : QueryList<SevenSegDigitComponent>;
  allDigits : Array<number>;
  private _viewInit : boolean = false;

  constructor() {
    // Set reasonable defaults
    this._value = null;
    this.digits = 1;
    this.decimalPlaces = 0;
  }

  ngOnInit() {
    this.allDigits = [];
    for (let i = 0; i<this.digits;i++) { this.allDigits.push(i); }
  }

  ngAfterViewInit() {
    this._viewInit = true;
    this.renderAll();
  }

  get viewBox() : string {
    let w = this.digits * 57;
    return `0 0 ${w} 80`;
  }

  groupTransform(i : number) : string {
    let w = i * 57;
    return `translate(${w} 0)`;
  }

  @Input()
  set value(value : number) {
    let decimalFactor = Math.pow(10, this.decimalPlaces);
    this._value = Math.round(value * decimalFactor) / decimalFactor;
    // console.log(`set value: ${this._value}`);
    this.renderAll();
  }

  renderAll() {
    if (!this._viewInit) return;

    // console.log('render all: ', this._value);

    // Special case: if value attribute is null or not given, blank the display
    if (this._value == null) {
      this.digitComponents.forEach( comp => comp.digit = null );
      return;
    }

    let value = Math.round(this._value * Math.pow(10,this.decimalPlaces)); // shift out decimals from the value
    // Round the result to correct floating point bug with value="4.6" and decimalPlaces="2" rendering as 4.5_ (4.6*100===459.999999...)

    let digits = this.digits; // declared to put in scope of forEach
    // targetIdx is where the decimal place will be shown
    let targetIdx = this.decimalPlaces > 0 ?
      this.digits - this.decimalPlaces - 1 :
      -1;

    let leadingZero = true;
    this.digitComponents.forEach(function(comp, idx) {
      comp.showDecimal = (idx === targetIdx);
      let divisor = Math.pow(10, (digits-idx-1));
      let curDigit = value / divisor;
      value = value % divisor;

      // console.log('CurDigit:', curDigit, 'next value:', value, 'idx', idx);
      if (Math.floor(curDigit) > 0) leadingZero = false;

      if (value == null || (leadingZero && idx < digits-1)) comp.digit = null;
      else if (idx === digits-1) comp.digit = Math.round(curDigit);
      else comp.digit = Math.floor(curDigit);
    });
  }

}
