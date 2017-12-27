import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {HeaderMenuService} from '../_services/headerMenu.service';
import {FooterMenuService} from '../_services/footerMenu.service';
import {AlertService, UserService} from '../_services/index';
import {AuthenticationService} from '../_services/index';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  model: any = {};
  user_role_id: number;
  userRoles: any = [];
  loading = false;
  selectedOption = 1;
  constructor(public router: Router,
    public http: Http,
    public headerMenu: HeaderMenuService,
    public footerMenu: FooterMenuService,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) {
    this.userService.checkSession().subscribe(
      data => {
        if (data.response === 'success') {
          this.router.navigate(['/dashboard']);
        }
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  ngOnInit() {
    const userId = '';
    this.getUserRoles();
    this.selectedOption = 1;
    if (this.authenticationService.isAuthenticate()) {
      this.router.navigate(['/dashboard']);
    }
    setTimeout(() => {
      $('.radio-inline:first').trigger('click');
    }, 1000);
  }
  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

  checkEmailExist(mailele) {
    this.loading = true;
    const mailid = mailele.value;
    this.userService.checkEmailExist(mailid)
      .subscribe(
      data => {
        if (data.response === 'success') {
          this.loading = false;
        } else {
          this.loading = false;
          this.alertService.error(data.message, true);
          mailele.focus();
        }
      },
      error => {
        // this.alertService.error(error);
        this.loading = false;
      });
  }
  getUserRoles() {
    const userId = '';
    this.loading = true;
    this.userService.getUserRoles()
      .subscribe(
      data => {
        this.userRoles = data.items;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
}
