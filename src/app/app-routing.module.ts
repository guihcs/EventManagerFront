import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {CustomerComponent} from './modules/customer/customer.component';
import {EventViewComponent} from './modules/event-view/event-view.component';
import {HomeComponent} from './modules/home/home.component';
import {RegisterComponent} from './modules/register/register.component';
import {PageNotFoundComponent} from './modules/page-not-found/page-not-found.component';
import {AdvancedSearchComponent} from './modules/advanced-search/advanced-search.component';
import {MarketHomeComponent} from './modules/market-home/market-home.component';
import {PasswordResetComponent} from './modules/password-reset/password-reset.component';
import {NewPasswordComponent} from './modules/new-password/new-password.component';
import {AdminModule} from './modules/admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: MarketHomeComponent
      },
      {
        path: 'search',
        component: AdvancedSearchComponent
      },
      {
        path: 'event/:name',
        component: EventViewComponent
      },
      {
        path: 'password/reset',
        component: PasswordResetComponent
      },
      {
        path: 'password/new/:id',
        component: NewPasswordComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => AdminModule)
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
