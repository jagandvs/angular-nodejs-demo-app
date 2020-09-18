import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersBomMasterComponent } from './masters-bom-master.component';

describe('MastersBomMasterComponent', () => {
  let component: MastersBomMasterComponent;
  let fixture: ComponentFixture<MastersBomMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersBomMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersBomMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
