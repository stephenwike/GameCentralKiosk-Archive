import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendorComponent } from './splendor.component';

describe('SplendorComponent', () => {
  let component: SplendorComponent;
  let fixture: ComponentFixture<SplendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
