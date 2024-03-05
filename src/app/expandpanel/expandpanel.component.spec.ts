import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandpanelComponent } from './expandpanel.component';

describe('ExpandpanelComponent', () => {
  let component: ExpandpanelComponent;
  let fixture: ComponentFixture<ExpandpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpandpanelComponent]
    });
    fixture = TestBed.createComponent(ExpandpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
