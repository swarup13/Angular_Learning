import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Get1ApiComponent } from './get1-api.component';

describe('Get1ApiComponent', () => {
  let component: Get1ApiComponent;
  let fixture: ComponentFixture<Get1ApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Get1ApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Get1ApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
