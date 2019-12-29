import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemtvDialogComponent } from './themtv-dialog.component';

describe('ThemtvDialogComponent', () => {
  let component: ThemtvDialogComponent;
  let fixture: ComponentFixture<ThemtvDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemtvDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemtvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
