import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { AlertService, UserService, AuthenticationService } from '../_services/index';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  usermodel: any = {};
    userDetail: any = {};
    loading = false;
    message: string;
  constructor(public router: Router,
                public http: Http,
                private userService: UserService,
                private alertService: AlertService,
                private authenticationService: AuthenticationService) { }

  ngOnInit() {
     const userDetail = JSON.parse(this.authenticationService.getUserToken());
    this.viewUserDetail(userDetail.userid);
  }
  viewUserDetail(userID) {
    this.loading = true;
    this.userService.viewUserDetail(userID)
        .subscribe(
            data => {
              console.log(data.items);
                this.viewUserDetail = data.items;
                this.loading = false;
            },
            error => {
                this.loading = false;
            });
  }
}
