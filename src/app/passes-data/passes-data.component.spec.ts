import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassesDataComponent } from './passes-data.component';

describe('PassesDataComponent', () => {
  let component: PassesDataComponent;
  let fixture: ComponentFixture<PassesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassesDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
