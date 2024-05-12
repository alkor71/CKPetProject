import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLayStationComponent } from './PlayStation.component';

describe('SubwoofersComponent', () => {
  let component: PLayStationComponent;
  let fixture: ComponentFixture<PLayStationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PLayStationComponent]
    });
    fixture = TestBed.createComponent(PLayStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
