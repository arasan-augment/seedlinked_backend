import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { HeaderMenuService } from '../_services/headerMenu.service';
import { FooterMenuService } from '../_services/footerMenu.service';
import { AlertService, UserService } from '../_services/index';
import {AuthenticationService} from '../_services/index';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ForgotpasswordComponent implements OnInit {
    model: any = {};
    loading = false;
    results: string[];
    loggedIn = false;

    constructor(public router: Router,
                public http: Http,
                public headerMenu: HeaderMenuService,
                public footerMenu: FooterMenuService,
                private userService: UserService,
                private alertService: AlertService,
              private authenticationService: AuthenticationService
            ) {


    }

    ngOnInit() {
      if (this.authenticationService.isAuthenticate()) {
      this.router.navigate(['/dashboard']);
    }
        this.headerMenu.hide();
        this.footerMenu.hide();

    }
    forgotpassword() {
        this.loading = true;
        this.userService.forgotpassword(this.model.username)
            .subscribe(
                data => {
                    if (data.response === 'success') {
                        this.alertService.success('Please check your email to reset password', true);
                        window.location.href = '/login';
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
