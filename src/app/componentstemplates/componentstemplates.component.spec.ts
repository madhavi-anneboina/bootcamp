import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentstemplatesComponent } from './componentstemplates.component';

describe('ComponentstemplatesComponent', () => {
  let component: ComponentstemplatesComponent;
  let fixture: ComponentFixture<ComponentstemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentstemplatesComponent]
    });
    fixture = TestBed.createComponent(ComponentstemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
