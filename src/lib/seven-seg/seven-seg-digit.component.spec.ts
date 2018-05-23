import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegDigitComponent } from './seven-seg-digit.component';

describe('SevenSegDigitComponent', () => {
  let component: SevenSegDigitComponent;
  let fixture: ComponentFixture<SevenSegDigitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenSegDigitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenSegDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
