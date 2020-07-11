import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondLinkComponent } from './second-link.component';

describe('SecondLinkComponent', () => {
  let component: SecondLinkComponent;
  let fixture: ComponentFixture<SecondLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
