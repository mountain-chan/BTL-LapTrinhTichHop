import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaovienDialogComponent } from './giaovien-dialog.component';

describe('GiaovienDialogComponent', () => {
  let component: GiaovienDialogComponent;
  let fixture: ComponentFixture<GiaovienDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaovienDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaovienDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
