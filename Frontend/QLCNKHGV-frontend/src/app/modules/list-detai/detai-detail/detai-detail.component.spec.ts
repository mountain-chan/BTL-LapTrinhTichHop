import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiDetailComponent } from './detai-detail.component';

describe('DetaiDetailComponent', () => {
  let component: DetaiDetailComponent;
  let fixture: ComponentFixture<DetaiDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
