import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormCardComponent } from './login-form-card.component';

describe('LoginFormCardComponent', () => {
  let component: LoginFormCardComponent;
  let fixture: ComponentFixture<LoginFormCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
