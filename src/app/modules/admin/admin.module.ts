import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SubEventModalComponent } from './sub-event-modal/sub-event-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MyEventsComponent } from './my-events/my-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import { EventTumbComponent } from './event-tumb/event-tumb.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { OverviewComponent } from './event-details/overview/overview.component';
import { SubEventsComponent } from './event-details/sub-events/sub-events.component';
import {EventDetailsModule} from './event-details/event-details.module';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [SubEventModalComponent, MyEventsComponent, EventDetailsComponent, EventTumbComponent, OverviewComponent, SubEventsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    EventDetailsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ]
})
export class AdminModule { }
