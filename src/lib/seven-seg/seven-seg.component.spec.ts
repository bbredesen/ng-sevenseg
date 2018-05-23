import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegComponent } from './seven-seg.component';

describe('SevenSegComponent', () => {
  let component: SevenSegComponent;
  let fixture: ComponentFixture<SevenSegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenSegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
