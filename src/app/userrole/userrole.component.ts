import {Component, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {NgForm, FormArray, FormsModule, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import * as $ from 'jquery';

import {AlertService, UserService, AuthenticationService} from '../_services/index';
import {MasterService} from '../_services/master.service';

@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserroleComponent implements OnInit {
  userrolemodel: any = {};
  userRoles: any = [];
  loading = false;
  disableFormBtn = true;

  userRoleDetail: any = [];
  printUserRoleDetail: any = [];
  newUserRoleAdd = true;
  existUserRoleEdit = false;
  activateTab = 'listuserrole';
  message: string;
  @ViewChild('viewUserDetail') viewUserRoleDetail;

  // Declare just an Array
  accessOptions = [];
  accessEditOptions = [];
  setAccessEditOptions = [];
  setAccessMenuOptions = [];
  // Check box selected
  selectedAccessOptions() {
    return this.setAccessMenuOptions;
    // return this.accessOptions
    //     .filter(opt => opt.checked)
    //     .map(opt => opt.value);
  }

  constructor(public router: Router,
    public http: Http,
    private userService: UserService,
    private alertService: AlertService,
    private authenticationService: AuthenticationService,
    private masterService: MasterService) {}

  ngOnInit() {
    this.getUserRoles();
    this.getMenuList();
  }

  getMenuList() {
    this.accessOptions = [];
    this.masterService.getMenuList()
      .subscribe(
      data => {
        this.accessOptions = data.items;
        this.accessOptions.forEach(obj => {
          if (obj.checked) {
            this.onChangeAccess(obj.value, true);
          }
        });
      },
      error => {
      });
  }
  onChangeAccess(menuName: string, isChecked: boolean) {
    if (isChecked) {
      if (this.setAccessMenuOptions.indexOf(menuName) < 0) {
        this.setAccessMenuOptions.push(menuName);
      }
    } else {
       const index = this.setAccessMenuOptions.findIndex(x => x.value === menuName);
//      const index: number = this.setAccessMenuOptions.indexOf(menuName);
      this.setAccessMenuOptions.splice(index, 1);
    }
    if (this.setAccessMenuOptions.length > 0) {
      this.disableFormBtn = false;
    } else {
      this.disableFormBtn = true;
    }
  }
  getUserRoles() {
    this.loading = true;
    this.userService.getAdminUserRoles()
      .subscribe(
      data => {
        this.userRoles = data.items;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }

  /****ADD NEW USERS / EDIT USERS ROLES****/
  addUserRole(userForm: NgForm) {
    this.loading = true;
    this.userrolemodel['accessRole'] = this.selectedAccessOptions();
    this.userService.addUserRole(this.userrolemodel)
      .subscribe(
      data => {
        this.alertService.success('Successfully User Role Added!', true);
        this.loading = false;
        this.activateTab = 'listuserrole';
        this.userRoles = data.items;
        userForm.resetForm('');
        setTimeout(() => {
          this.resetAlertForm();
        }, 2000);
      },
      error => {
        this.alertService.error('Technical Error');
        this.loading = false;
      });
  }

  /*******EDIT USERS ROLES*****/
  editUserRole(roleId) {
    this.loading = true;
    this.setAccessEditOptions = [];
    this.setAccessMenuOptions = [];
    this.getMenuList();
    this.userService.getUserRoleDetail(roleId)
      .subscribe(
      data => {
        this.activateTab = 'adduserrole';
        this.userRoleDetail = data.items;
        this.userrolemodel['userRoleName'] = this.userRoleDetail.roleName;
        this.userrolemodel['roleId'] = this.userRoleDetail.roleId;
        this.accessEditOptions = this.userRoleDetail.roleAccess;

        this.accessEditOptions.forEach(obj => {
          this.setAccessEditOptions.push(obj.value);
          if (obj.checked) {
            this.onChangeAccess(obj.value, true);
          }
        });
        if (this.setAccessMenuOptions.length === 0) {
          this.accessOptions.forEach(obj => {
            if (obj.checked && this.setAccessMenuOptions.indexOf(obj.value) < 0) {
              this.onChangeAccess(obj.value, true);
            }
          });
        }
        this.newUserRoleAdd = false;
        this.existUserRoleEdit = true;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  /*******VIEW USERS ROLES ROLE*****/
  viewUserRole(roleId) {
    this.loading = true;
    this.userService.viewUserRoleDetail(roleId)
      .subscribe(
      data => {
        this.viewUserRoleDetail.nativeElement.className = 'modal fade show in';
        this.printUserRoleDetail = data.items;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  /*******DELETE USERS ROLE*****/
  deleteUserRole(roleId) {
    if (window.confirm('Are you sure to delete this user role?')) {
      this.loading = true;
      this.userService.deleteUserRoleDetail(roleId)
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

  closeViewUserRole() {
    this.viewUserRoleDetail.nativeElement.className = 'modal fade';
  }
  resetAlertForm() {
    this.alertService.error('');
    this.alertService.clearMessage();
  }
  resetFormValues(form: NgForm) {
    form.resetForm('');
  }
  resetTabActiveAdd() {
    this.activateTab = 'adduserrole';
    //        this.setAccessEditOptions = [];
    //        this.getMenuList();
  }
  resetTabActiveList() {
    this.activateTab = 'listuserrole';
  }

}
