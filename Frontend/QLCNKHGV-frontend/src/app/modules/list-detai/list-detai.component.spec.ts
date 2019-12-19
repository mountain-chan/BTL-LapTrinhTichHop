import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetaiComponent } from './list-detai.component';

describe('ListDetaiComponent', () => {
  let component: ListDetaiComponent;
  let fixture: ComponentFixture<ListDetaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
