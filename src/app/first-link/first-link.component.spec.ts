import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLinkComponent } from './first-link.component';

describe('FirstLinkComponent', () => {
  let component: FirstLinkComponent;
  let fixture: ComponentFixture<FirstLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
