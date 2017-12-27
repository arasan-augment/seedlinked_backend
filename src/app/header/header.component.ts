import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderMenuService} from '../_services/headerMenu.service';
import {AlertService, UserService, AuthenticationService} from '../_services/index';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  loggeinuserdetail: any = [];
  isManager = false;
  header = true;
//  footer = true;
  constructor(public router: Router, public headerMenu: HeaderMenuService,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
    if (this.authenticationService.isAuthenticate()) {
      const userDetail = JSON.parse(this.authenticationService.getUserToken());
      this.loggeinuserdetail['firstName'] = userDetail.firstname;
      this.loggeinuserdetail['lastName'] = userDetail.lastname;
    } else {
      this.header = false;
    }
  }

  logout() {
    this.userService.logout()
      .subscribe(
      data => {
        if (data.response === 'success') {
          localStorage.removeItem('currentUser');
          // localStorage.clear();
          this.alertService.success('Logout successful', true);
          this.router.navigate(['/login']);
          this.header = false;
          const footer = false;
        } else {
          this.alertService.error(data.message, true);
        }
      },
      error => {
        this.alertService.error(error);
      });
  }

  toggleClass() {
    $('.row-offcanvas').toggleClass('active');
    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
    $('#main').toggleClass('column').toggleClass('col-lg-10').toggleClass('col-lg-11 side-hidden');
  }

  isSubMenuActive(subMenu) {
    if ('/users' === subMenu) {
      return true;
    } else if ('/user-role' === subMenu) {
      return true;
    }
  }
}

