import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitecoinComponent } from './litecoin.component';

describe('LitecoinComponent', () => {
  let component: LitecoinComponent;
  let fixture: ComponentFixture<LitecoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitecoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
