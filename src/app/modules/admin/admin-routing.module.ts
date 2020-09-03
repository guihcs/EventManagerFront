import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEventComponent} from './create-event/create-event.component';
import {AdminComponent} from './admin.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {MyEventsComponent} from './my-events/my-events.component';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [

  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'my-events',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'create-event',
        component: CreateEventComponent
      },
      {
        path: 'event/:name',
        loadChildren: () => import('./event-details/event-details.module').then(m => m.EventDetailsModule)
      },
      {
        path: 'my-events',
        component: MyEventsComponent
      },
      {
        path: 'event',
        redirectTo: 'my-events',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
