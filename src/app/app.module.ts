import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AdminComponent } from './modules/admin/admin.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { CustomerComponent } from './modules/customer/customer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CreateEventComponent } from './modules/admin/create-event/create-event.component';
import {AdminModule} from './modules/admin/admin.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventViewComponent } from './modules/event-view/event-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProfileComponent } from './modules/admin/profile/profile.component';
import { AdvancedSearchComponent } from './modules/advanced-search/advanced-search.component';
import { MarketHomeComponent } from './modules/market-home/market-home.component';
import { PasswordResetComponent } from './modules/password-reset/password-reset.component';
import { NewPasswordComponent } from './modules/new-password/new-password.component';
import { SubscriptionsComponent } from './modules/customer/subscriptions/subscriptions.component';
import {CustomerModule} from './modules/customer/customer.module';
import {EventViewModule} from './modules/event-view/event-view.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CustomerComponent,
    CreateEventComponent,
    EventViewComponent,
    HomeComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProfileComponent,
    AdvancedSearchComponent,
    MarketHomeComponent,
    PasswordResetComponent,
    NewPasswordComponent,
    SubscriptionsComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AdminModule,
    CustomerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatTableModule,
    MatRadioModule,
    MatTooltipModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    EventViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
