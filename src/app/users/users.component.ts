import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {NgForm} from '@angular/forms';
import * as $ from 'jquery';

import {AlertService, UserService, AuthenticationService} from '../_services/index';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class UsersComponent implements OnInit {
  usermodel: any = {};
  users: any = [];
  userRoles: any = [];
  userDetail: any = [];
  printUserDetail: any = [];

  loading = false;
  newUserAdd = true;
  existUserEdit = false;
  activateTab = 'listusers';
  message: string;
  @ViewChild('viewUserDetail') viewUserDetail;
  constructor(public router: Router,
    public http: Http,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.getUsers();
    this.message = '';
  }
  getUsers() {
    this.loading = true;
    this.userService.getUsers()
      .subscribe(
      data => {
        this.users = data.items['users'];
        this.userRoles = data.items['user_roles'];
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  /****ADD NEW USERS / EDIT USERS****/
  addUser(userForm: NgForm) {
    this.loading = true;
    this.userService.addUser(this.usermodel)
      .subscribe(
      data => {
        this.alertService.success('Successfully User Added!', true);
        this.loading = false;
        this.activateTab = 'listusers';
        this.getUsers();
        userForm.resetForm('');
        setTimeout(() => {
          this.resetAlertForm();
        }, 3000);
      },
      error => {
        this.alertService.error('Technical Error');
        this.loading = false;
      });
  }
  /*****CHECK USER EMAILAIL EXISTING*****/
  checkUserEmailExist(mailele) {
    this.loading = true;
    const mailid = mailele.value;
    const editUserId = this.usermodel['userID'];
    this.userService.checkUserEmailExist(mailid, editUserId)
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
  /*******EDIT USERS*****/
  editUser(userID) {
    this.loading = true;
    this.userService.getUserDetail(userID)
      .subscribe(
      data => {
        this.usermodel = data.items;
        this.newUserAdd = false;
        this.existUserEdit = true;
        this.activateTab = 'addusers';
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  /*******VIEW USERS*****/
  viewUser(userID) {
    this.loading = true;
    this.userService.viewUserDetail(userID)
      .subscribe(
      data => {
        this.viewUserDetail.nativeElement.className = 'modal fade show in';
        this.printUserDetail = data.items;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  /*******DELETE USERS*****/
  deleteUser(userID) {

    if (window.confirm('Are you sure to delete this user?')) {
      this.loading = true;
      this.userService.deleteUserDetail(userID)
        .subscribe(
        data => {
          this.users = data.items;
          this.loading = false;
        },
        error => {
          this.loading = false;
        });
    }
  }

  closeViewUser() {
    this.viewUserDetail.nativeElement.className = 'modal fade';
  }
  resetAlertForm() {
    this.alertService.error('');
    this.alertService.clearMessage();
  }
  resetFormValues(form: NgForm) {
    form.resetForm('');
  }
  resetTabActiveAdd() {
    this.activateTab = 'addusers';
  }
  resetTabActiveList() {
    this.activateTab = 'listusers';
  }
}

