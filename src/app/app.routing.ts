import {Injectable} from '@angular/core';
import {RouterModule, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {RegisterComponent} from './register/register.component';
import {CollaborationComponent} from './collaboration/collaboration.component';
import {SellyourseedComponent} from './sellyourseed/sellyourseed.component';
import {WhatwedoComponent} from './whatwedo/whatwedo.component';
import {WhoweareComponent} from './whoweare/whoweare.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './profile/profile.component';
import {MyfarmComponent} from './myfarm/myfarm.component';
import {UsersComponent} from './users/users.component';
import {UserroleComponent} from './userrole/userrole.component';
import {SeedsearchComponent} from './seedsearch/seedsearch.component';
import {MybioregionComponent} from './mybioregion/mybioregion.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {FooterComponent} from './footer/footer.component';
import {AuthenticationService} from './_services/index';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authenticationService.isAuthenticate()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
export const AppRoutes: any = [
  {path: '', component: HomepageComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'myfarm', component: MyfarmComponent, canActivate: [AuthGuardService]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuardService]},
  {path: 'user-role', component: UserroleComponent, canActivate: [AuthGuardService]},
  {path: 'seed-search', component: SeedsearchComponent, canActivate: [AuthGuardService]},
  {path: 'my-bio-region', component: MybioregionComponent, canActivate: [AuthGuardService]},
  {path: 'unauthorized', component: UnauthorizedComponent}

];

export const AppRouting = RouterModule.forRoot(AppRoutes, {
});
