import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersTallyMasterComponent } from './masters-tally-master.component';

describe('MastersTallyMasterComponent', () => {
  let component: MastersTallyMasterComponent;
  let fixture: ComponentFixture<MastersTallyMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersTallyMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersTallyMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
