import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatanConfigComponent } from './config.component';

describe('CatanConfigComponent', () => {
  let component: CatanConfigComponent;
  let fixture: ComponentFixture<CatanConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatanConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatanConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
