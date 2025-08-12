import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestappComponent } from './testapp.component';

describe('TestappComponent', () => {
  let component: TestappComponent;
  let fixture: ComponentFixture<TestappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
