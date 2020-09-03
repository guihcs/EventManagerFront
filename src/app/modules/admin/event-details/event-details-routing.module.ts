import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventDetailsComponent} from './event-details.component';
import {OverviewComponent} from './overview/overview.component';
import {SubEventsComponent} from './sub-events/sub-events.component';

const routes: Routes = [
  {
    path: '',
    component: EventDetailsComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'sub-events',
        component: SubEventsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDetailsRoutingModule { }
