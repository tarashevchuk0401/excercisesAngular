import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipescompComponent } from './pipescomp.component';

describe('PipescompComponent', () => {
  let component: PipescompComponent;
  let fixture: ComponentFixture<PipescompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipescompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipescompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
