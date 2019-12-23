import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaovienDetailComponent } from './giaovien-detail.component';

describe('GiaovienDetailComponent', () => {
  let component: GiaovienDetailComponent;
  let fixture: ComponentFixture<GiaovienDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaovienDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaovienDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
