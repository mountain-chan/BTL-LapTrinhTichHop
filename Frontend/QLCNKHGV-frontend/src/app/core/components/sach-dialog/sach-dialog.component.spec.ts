import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SachDialogComponent } from './sach-dialog.component';

describe('SachDialogComponent', () => {
  let component: SachDialogComponent;
  let fixture: ComponentFixture<SachDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
