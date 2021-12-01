import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftLogsComponent } from './liftlogs.component';

describe('LiftlogsComponent', () => {
  let component: LiftLogsComponent;
  let fixture: ComponentFixture<LiftLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiftLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
