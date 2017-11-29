import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktenComponent } from './markten.component';

describe('MarktenComponent', () => {
  let component: MarktenComponent;
  let fixture: ComponentFixture<MarktenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarktenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
