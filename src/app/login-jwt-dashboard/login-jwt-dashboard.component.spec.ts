import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJwtDashboardComponent } from './login-jwt-dashboard.component';

describe('LoginJwtDashboardComponent', () => {
  let component: LoginJwtDashboardComponent;
  let fixture: ComponentFixture<LoginJwtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginJwtDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginJwtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
