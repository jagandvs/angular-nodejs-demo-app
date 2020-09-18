import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesItemMasterComponent } from './sales-item-master.component';

describe('SalesItemMasterComponent', () => {
  let component: SalesItemMasterComponent;
  let fixture: ComponentFixture<SalesItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
