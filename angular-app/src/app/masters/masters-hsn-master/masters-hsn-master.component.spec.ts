import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersHsnMasterComponent } from './masters-hsn-master.component';

describe('MastersHsnMasterComponent', () => {
  let component: MastersHsnMasterComponent;
  let fixture: ComponentFixture<MastersHsnMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersHsnMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersHsnMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
