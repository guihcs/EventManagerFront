import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubEventModalComponent} from '../sub-event-modal/sub-event-modal.component';
import {MatTable} from '@angular/material/table';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {EventService} from '../../../services/event/event.service';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  @ViewChild('subTable') eventTable: MatTable<any>;
  subEvents = [];
  subEventTableDisplayColumns = ['name', 'start', 'end', 'price', 'remove'];
  eventForm = this.fb.group({
    profile: this.fb.group({
      name: [''],
      description: [''],
      image: [''],
      visibility: ['public']
    }),
    location: this.fb.group({
      type: ['local'],
      city: [''],
      state: [''],
      street: [''],
    })
  });

  publishing;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private eventService: EventService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
  }


  openSubEventDialog(){
    const dialogRef = this.dialog.open(SubEventModalComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.subEvents.push(result);
        if (this.subEvents.length > 1) this.eventTable.renderRows();
      }
    });
  }


  removeSubEvent(event){
    let index = this.subEvents.findIndex(el => el.name == event.name);
    if (index >= 0){
      this.subEvents.splice(index, 1);
    }
    if (this.subEvents.length > 0) this.eventTable.renderRows();
  }


  async publishEvent(){
    let event = this.eventForm.value;
    event.subEvents = this.subEvents;
    this.publishing = true;

    if (await this.eventService.publishEvent(event, await this.auth.getProfile())){
      this.router.navigate(['admin', 'event', encodeURI(event.profile.name)]);
    }else {
      this.publishing = false;
    }

  }




}
