import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersItemMasterComponent } from './masters-item-master.component';

describe('MastersItemMasterComponent', () => {
  let component: MastersItemMasterComponent;
  let fixture: ComponentFixture<MastersItemMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersItemMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersItemMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
