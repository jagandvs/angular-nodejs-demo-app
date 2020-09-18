import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMastersComponent } from './nav-masters.component';

describe('NavMastersComponent', () => {
  let component: NavMastersComponent;
  let fixture: ComponentFixture<NavMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
