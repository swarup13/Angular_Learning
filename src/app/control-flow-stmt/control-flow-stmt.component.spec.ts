import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowStmtComponent } from './control-flow-stmt.component';

describe('ControlFlowStmtComponent', () => {
  let component: ControlFlowStmtComponent;
  let fixture: ComponentFixture<ControlFlowStmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowStmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlFlowStmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
