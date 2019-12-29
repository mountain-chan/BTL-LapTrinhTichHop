import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaibaoDialogComponent } from './baibao-dialog.component';

describe('BaibaoDialogComponent', () => {
  let component: BaibaoDialogComponent;
  let fixture: ComponentFixture<BaibaoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaibaoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaibaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
