import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastDayComponent } from './last-day.component';

describe('LastDayComponent', () => {
  let component: LastDayComponent;
  let fixture: ComponentFixture<LastDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
