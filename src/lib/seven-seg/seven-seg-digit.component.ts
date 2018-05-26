import { Component, OnInit, Input, Inject, AfterViewInit, QueryList, Renderer2, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { SevenSegComponent } from './seven-seg.component';

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

  private cssObject : any;

  private fillOn : string = '#F00';
  private fillOff : string = '#300';

  get digit():number { return this._digitValue; }
  set digit(val : number) { this._digitValue = val; this.render(); }

  set showDecimal(show : boolean) { this._showDecimal = show; }
  get showDecimal() : boolean { return this._showDecimal; }

  constructor(@Inject(SevenSegComponent) private parent: SevenSegComponent,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.cssObject = this.parent.cssObject;
    if (this.cssObject.fillOn) { this.fillOn = this.cssObject.fillOn; }
    if (this.cssObject.fillOff) { this.fillOff = this.cssObject.fillOff; }
  }

  render() {
    var segs = segmentsForDigit[this._digitValue];
    this.segments.forEach((item, idx) => {
      if ((segs >> idx) & 1) {
        this.renderer.setStyle(item.nativeElement, 'fill', this.fillOn);
      } else {
        this.renderer.setStyle(item.nativeElement, 'fill', this.fillOff);
      }
    });
    if (this._showDecimal) { this.renderer.setStyle(this.point.nativeElement, 'fill', this.fillOn); }
  }
}
