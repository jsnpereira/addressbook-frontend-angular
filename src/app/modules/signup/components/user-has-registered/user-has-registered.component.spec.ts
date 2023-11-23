import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHasRegisteredComponent } from './user-has-registered.component';

describe('UserHasRegisteredComponent', () => {
  let component: UserHasRegisteredComponent;
  let fixture: ComponentFixture<UserHasRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHasRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHasRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
