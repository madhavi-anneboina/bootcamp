import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildChildComponent } from './first-child-child.component';

describe('FirstChildChildComponent', () => {
  let component: FirstChildChildComponent;
  let fixture: ComponentFixture<FirstChildChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstChildChildComponent]
    });
    fixture = TestBed.createComponent(FirstChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
