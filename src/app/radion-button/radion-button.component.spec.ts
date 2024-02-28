import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadionButtonComponent } from './radion-button.component';

describe('RadionButtonComponent', () => {
  let component: RadionButtonComponent;
  let fixture: ComponentFixture<RadionButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadionButtonComponent]
    });
    fixture = TestBed.createComponent(RadionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
