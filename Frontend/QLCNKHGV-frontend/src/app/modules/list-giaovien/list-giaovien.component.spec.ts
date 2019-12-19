import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGiaovienComponent } from './list-giaovien.component';

describe('ListGiaovienComponent', () => {
  let component: ListGiaovienComponent;
  let fixture: ComponentFixture<ListGiaovienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGiaovienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
