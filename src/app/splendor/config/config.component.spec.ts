import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplendorConfigComponent } from './config.component';

describe('SplendorConfigComponent', () => {
  let component: SplendorConfigComponent;
  let fixture: ComponentFixture<SplendorConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplendorConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplendorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
