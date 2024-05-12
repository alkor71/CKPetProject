import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XBoxComponent } from './X-Box.component';

describe('AmplifiersComponent', () => {
  let component: XBoxComponent;
  let fixture: ComponentFixture<XBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XBoxComponent]
    });
    fixture = TestBed.createComponent(XBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
