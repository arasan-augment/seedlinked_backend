import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular-4-data-table';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRouting, AuthGuardService } from './app.routing';

import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HeaderMenuService } from './_services/headerMenu.service';
import { FooterMenuService } from './_services/footerMenu.service';
import { JwtService } from './_services/jwt.service';
import { MyfarmService } from './_services/myfarm.service';
import { MasterService } from './_services/master.service';
import { MybioregionService } from './_services/mybioregion.service';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MyfarmComponent } from './myfarm/myfarm.component';
import { UsersComponent } from './users/users.component';
import {UserroleComponent} from './userrole/userrole.component';
import { SellyourseedComponent } from './sellyourseed/sellyourseed.component';
import { CollaborationComponent } from './collaboration/collaboration.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { WhoweareComponent } from './whoweare/whoweare.component';
import { SeedsearchComponent } from './seedsearch/seedsearch.component';
import { GuardComponent } from './guard/guard.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { MybioregionComponent } from './mybioregion/mybioregion.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ForgotpasswordComponent,
    RegisterComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    PagenotfoundComponent,
    MyfarmComponent,
    UsersComponent,
    UserroleComponent,
    SellyourseedComponent,
    CollaborationComponent,
    WhatwedoComponent,
    WhoweareComponent,
    SeedsearchComponent,
    GuardComponent,
    UnauthorizedComponent,
    MybioregionComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule, AppRouting, FormsModule, ReactiveFormsModule, HttpModule, CommonModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyA70zIij1L5UUa-_9O-90gU0QK3rYM4DEQ',
          libraries: [ 'places' ]
      }),
      AgmSnazzyInfoWindowModule
  ],
  providers: [
    HeaderMenuService,
    FooterMenuService,
    AlertService,
    AuthenticationService,
    UserService,
    JwtService,
    MyfarmService,
    MasterService,
    MybioregionService,
    AuthGuardService,
    DatePipe
  ],
  bootstrap: [HeaderComponent, AppComponent, FooterComponent]
})
export class AppModule { }
