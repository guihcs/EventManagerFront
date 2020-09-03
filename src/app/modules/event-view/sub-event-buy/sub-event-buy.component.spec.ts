import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventBuyComponent } from './sub-event-buy.component';

describe('SubEventBuyComponent', () => {
  let component: SubEventBuyComponent;
  let fixture: ComponentFixture<SubEventBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
