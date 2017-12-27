import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {HeaderMenuService} from '../_services/headerMenu.service';
import {FooterMenuService} from '../_services/footerMenu.service';
import {AlertService, UserService} from '../_services/index';
import {AuthenticationService} from '../_services/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  results: string[];
  loggedIn = false;
  date = new Date();
  constructor(public router: Router,
    public http: Http,
    public headerMenu: HeaderMenuService,
    public footerMenu: FooterMenuService,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
  ) {


  }

  ngOnInit() {
  if (this.authenticationService.isAuthenticate()) {
      this.router.navigate(['/dashboard']);
    }
  }
  login() {
    this.loading = true;
    this.userService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        if (data.response === 'success') {
          this.loggedIn = true;
          localStorage.setItem('currentUser', JSON.stringify(data.items));
          this.alertService.success('Login successful', true);
          sessionStorage.setItem('angularSession', JSON.stringify(data.items));
          window.location.href = '/dashboard';
        } else {
          this.loggedIn = false;
          this.loading = false;
          this.alertService.error(data.message, true);
        }
      },
      error => {
        this.loggedIn = false;
        // this.alertService.error(error);
        this.loading = false;
      });
  }
}
