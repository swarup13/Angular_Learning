import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJwtAuthenticationComponent } from './login-jwt-authentication.component';

describe('LoginJwtAuthenticationComponent', () => {
  let component: LoginJwtAuthenticationComponent;
  let fixture: ComponentFixture<LoginJwtAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginJwtAuthenticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginJwtAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
