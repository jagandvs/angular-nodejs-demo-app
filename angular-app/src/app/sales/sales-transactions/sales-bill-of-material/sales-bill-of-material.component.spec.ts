import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesBillOfMaterialComponent } from './sales-bill-of-material.component';

describe('SalesBillOfMaterialComponent', () => {
  let component: SalesBillOfMaterialComponent;
  let fixture: ComponentFixture<SalesBillOfMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesBillOfMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesBillOfMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
