import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SachDetailComponent } from './sach-detail.component';

describe('SachDetailComponent', () => {
  let component: SachDetailComponent;
  let fixture: ComponentFixture<SachDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
