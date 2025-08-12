import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHookEventComponent } from './lifecycle-hook-event.component';

describe('LifecycleHookEventComponent', () => {
  let component: LifecycleHookEventComponent;
  let fixture: ComponentFixture<LifecycleHookEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHookEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleHookEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
