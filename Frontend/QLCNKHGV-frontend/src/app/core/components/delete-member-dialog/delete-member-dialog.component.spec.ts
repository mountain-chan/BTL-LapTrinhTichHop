import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMemberDialogComponent } from './delete-member-dialog.component';

describe('DeleteMemberDialogComponent', () => {
  let component: DeleteMemberDialogComponent;
  let fixture: ComponentFixture<DeleteMemberDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMemberDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
