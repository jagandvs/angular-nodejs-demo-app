import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMastersComponent } from './store-masters.component';

describe('StoreMastersComponent', () => {
  let component: StoreMastersComponent;
  let fixture: ComponentFixture<StoreMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
