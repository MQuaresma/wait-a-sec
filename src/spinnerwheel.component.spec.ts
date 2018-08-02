import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerwheelComponent } from './spinnerwheel.component';

describe('SpinnerwheelComponent', () => {
  let component: SpinnerwheelComponent;
  let fixture: ComponentFixture<SpinnerwheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerwheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
