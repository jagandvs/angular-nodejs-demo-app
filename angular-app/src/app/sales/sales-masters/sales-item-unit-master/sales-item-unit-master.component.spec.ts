import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemUnitMasterComponent } from './sales-item-unit-master.component';

describe('SalesItemUnitMasterComponent', () => {
  let component: SalesItemUnitMasterComponent;
  let fixture: ComponentFixture<SalesItemUnitMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesItemUnitMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesItemUnitMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
