import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesingComponentComponent } from './tesing-component.component';

describe('TesingComponentComponent', () => {
  let component: TesingComponentComponent;
  let fixture: ComponentFixture<TesingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
