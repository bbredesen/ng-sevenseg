import { Component, OnInit, Input, AfterViewInit, QueryList, ElementRef, ViewChild, ViewChildren } from '@angular/core';

var segmentsForDigit = [0x3F,0x06,0x5B,0x4F,0x66,0x6D,0x7D,0x07,0x7F,0x6F];

class SegParams {
  x : number;
  y : number;
  transform : string;
  ref : string;
}

@Component({
  selector: 'seven-seg-digit',
  templateUrl: './seven-seg-digit.component.html',
  styleUrls: ['./seven-seg-digit.component.css']
})
export class SevenSegDigitComponent implements OnInit {
  @ViewChildren('seg', { read: ElementRef }) segments : QueryList<ElementRef>;
  @ViewChild('dot') point : any;

  private _digitValue : number;
  private _showDecimal : boolean = false;

  get digit():number { return this._digitValue; }
  set digit(val : number) { this._digitValue = val; this.render(); }

  set showDecimal(show : boolean) { this._showDecimal = show; }
  get showDecimal() : boolean { return this._showDecimal; }

  constructor() { }

  ngOnInit() {
  }

  render() {
    var segs = segmentsForDigit[this._digitValue];
    this.segments.forEach((item, idx) => {
      if ((segs >> idx) & 1) {
        item.nativeElement.style.fill = '#F00'; // change to a class that is defined by the parent.
      } else {
        item.nativeElement.style.fill = '#300';
      }
    });
    if (this._showDecimal) { this.point.nativeElement.style.fill='#F00'; }
  }
}
