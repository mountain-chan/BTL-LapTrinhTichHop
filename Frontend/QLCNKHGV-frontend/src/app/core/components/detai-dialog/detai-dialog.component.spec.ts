import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiDialogComponent } from './detai-dialog.component';

describe('DetaiDialogComponent', () => {
  let component: DetaiDialogComponent;
  let fixture: ComponentFixture<DetaiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
