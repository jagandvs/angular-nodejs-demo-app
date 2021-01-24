import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAdministratorComponent } from './nav-administrator.component';

describe('NavAdministratorComponent', () => {
  let component: NavAdministratorComponent;
  let fixture: ComponentFixture<NavAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
