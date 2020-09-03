import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEventModalComponent } from './sub-event-modal.component';

describe('SubEventModalComponent', () => {
  let component: SubEventModalComponent;
  let fixture: ComponentFixture<SubEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
