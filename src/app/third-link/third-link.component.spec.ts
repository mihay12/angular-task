import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdLinkComponent } from './third-link.component';

describe('ThirdLinkComponent', () => {
  let component: ThirdLinkComponent;
  let fixture: ComponentFixture<ThirdLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
