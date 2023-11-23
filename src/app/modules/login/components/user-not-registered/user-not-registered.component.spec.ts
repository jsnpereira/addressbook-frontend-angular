import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotRegisteredComponent } from './user-not-registered.component';

describe('UserNotRegisteredComponent', () => {
  let component: UserNotRegisteredComponent;
  let fixture: ComponentFixture<UserNotRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
