import { Component, Input, Inject, HostBinding, AfterViewInit, QueryList, Renderer2, ElementRef, ContentChildren, ViewChild, ViewChildren } from '@angular/core';
import { SevenSegComponent } from './seven-seg.component';

const segmentsForDigit = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F];

@Component({
  selector: '[sevenSegDigit]',
  templateUrl: './seven-seg-digit.component.html',
  styleUrls: ['./seven-seg-digit.component.css']
})
export class SevenSegDigitComponent implements AfterViewInit {
  @ViewChildren('seg', { read: ElementRef }) segments : QueryList<ElementRef>;
  @ViewChild('dot') point : any;

  class : string;

  private _digitValue : number;
  private _showDecimal : boolean = false;

  allSegments : Array<number>;

  get digit():number { return this._digitValue; }
  set digit(val : number) { this._digitValue = val; this.render(); }

  set showDecimal(show : boolean) { this._showDecimal = show; }
  get showDecimal() : boolean { return this._showDecimal; }

  @Input() idx : number;

  constructor(private renderer: Renderer2)
  {
    this.allSegments = [];
    for (let i = 0; i<7;i++) { this.allSegments.push(i); }
  }

  ngAfterViewInit() {
    this.render();
  }

  render() {
    let segs = segmentsForDigit[this._digitValue];
    this.segments.forEach((item, idx) => {
      if ((segs >> idx) & 1) {
        this.renderer.setAttribute(item.nativeElement, 'segmentOn', '');
        this.renderer.removeAttribute(item.nativeElement, 'segmentOff');
      } else {
        this.renderer.setAttribute(item.nativeElement, 'segmentOff', '');
        this.renderer.removeAttribute(item.nativeElement, 'segmentOn');
      }
    });
    
    if (this._showDecimal) {
      this.renderer.setAttribute(this.point.nativeElement, 'segmentOn', '');
      this.renderer.removeAttribute(this.point.nativeElement, 'segmentOff');
    } else {
      this.renderer.setAttribute(this.point.nativeElement, 'segmentOff', '');
      this.renderer.removeAttribute(this.point.nativeElement, 'segmentOn');
    }
  }
}
