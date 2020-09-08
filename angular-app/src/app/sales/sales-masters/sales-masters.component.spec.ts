import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMastersComponent } from './sales-masters.component';

describe('SalesMastersComponent', () => {
  let component: SalesMastersComponent;
  let fixture: ComponentFixture<SalesMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
