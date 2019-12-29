import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaibaoDetailComponent } from './baibao-detail.component';

describe('BaibaoDetailComponent', () => {
  let component: BaibaoDetailComponent;
  let fixture: ComponentFixture<BaibaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaibaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaibaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
