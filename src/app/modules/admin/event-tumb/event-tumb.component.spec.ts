import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTumbComponent } from './event-tumb.component';

describe('EventTumbComponent', () => {
  let component: EventTumbComponent;
  let fixture: ComponentFixture<EventTumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
