import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBaibaoComponent } from './list-baibao.component';

describe('ListBaibaoComponent', () => {
  let component: ListBaibaoComponent;
  let fixture: ComponentFixture<ListBaibaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBaibaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBaibaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
