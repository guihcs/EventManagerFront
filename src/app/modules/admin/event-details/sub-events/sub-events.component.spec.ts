import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventsComponent } from './sub-events.component';

describe('SubEventsComponent', () => {
  let component: SubEventsComponent;
  let fixture: ComponentFixture<SubEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
