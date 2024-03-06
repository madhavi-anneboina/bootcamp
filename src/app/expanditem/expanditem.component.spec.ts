import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpanditemComponent } from './expanditem.component';

describe('ExpanditemComponent', () => {
  let component: ExpanditemComponent;
  let fixture: ComponentFixture<ExpanditemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpanditemComponent]
    });
    fixture = TestBed.createComponent(ExpanditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
