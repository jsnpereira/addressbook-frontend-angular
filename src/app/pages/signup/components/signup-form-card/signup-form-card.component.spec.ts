import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormCardComponent } from './signup-form-card.component';

describe('SignupFormCardComponent', () => {
  let component: SignupFormCardComponent;
  let fixture: ComponentFixture<SignupFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
