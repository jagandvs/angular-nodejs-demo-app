import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSalesOrderComponent } from './sales-sales-order.component';

describe('SalesSalesOrderComponent', () => {
  let component: SalesSalesOrderComponent;
  let fixture: ComponentFixture<SalesSalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSalesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
