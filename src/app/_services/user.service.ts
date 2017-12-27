import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response, RequestMethod} from '@angular/http';
import {JwtService} from './jwt.service';
import {GlobalVariable} from '../GlobalConfig';
import {Observable} from 'rxjs/Observable';

import {User} from '../_models/user';

@Injectable()
export class UserService {
  public baseApiUrl = GlobalVariable.BASE_API_URL;
  public baseFolderUrl = GlobalVariable.BASE_FOLDER_URL;
  constructor(private http: Http,
    private jwtService: JwtService) {}

  login(username: string, password: string) {
    const userDetail = JSON.stringify({username: username, password: password});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/login', userDetail, this.jwtService.jwt())
      .share()
      .map((response: Response) => response.json());
  }
  forgotpassword(username: string) {
    const userDetail = JSON.stringify({username: username});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/forgotpassword', userDetail, this.jwtService.jwt())
      .share()
      .map((response: Response) => response.json());
  }
  create(user: User) {
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/register', user, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  viewUserDetail(getUserID: String) {
    const userID = JSON.stringify({userID: getUserID});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_user_by_id', userID, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  checkSession() {
    return this.http.get(this.baseApiUrl + this.baseFolderUrl + '_api/user/checksession', this.jwtService.jwt())
      .map((response: Response) => response.json());
  }

  logout() {
    return this.http.get(this.baseApiUrl + this.baseFolderUrl + '_api/user/logout', this.jwtService.jwt())
      .share()
      .map((response: Response) => response.json());
  }

  checkEmailExist(getmailid: string) {
    const mailid = JSON.stringify({mailid: getmailid});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/checkEmailExist', mailid, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }

  /*******Add user******/

  getUsers() {
    return this.http.get(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_users', this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  addUser(user: User) {
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/add_user', user, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  checkUserEmailExist(getmailid: string, getEditUserId: String) {
    const mailid = JSON.stringify({mailid: getmailid, editUserId: getEditUserId});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/checkUserEmailExist', mailid, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  getUserDetail(getUserID: String) {
    const userID = JSON.stringify({userID: getUserID});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_user_by_id', userID, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  deleteUserDetail(getUserID: String) {
    const userID = JSON.stringify({userID: getUserID});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/delete_user_by_id', userID, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  /***USER ROLE***/
  getUserRoles() {
    return this.http.get(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_user_roles', this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  getAdminUserRoles() {
    return this.http.get(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_admin_user_roles', this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  addUserRole(userRoles: String) {
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/add_user_role', userRoles, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  getUserRoleDetail(getRoleId: String) {
    const roleId = JSON.stringify({roleId: getRoleId});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_user_role_detail', roleId, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  viewUserRoleDetail(getRoleId: String) {
    const roleId = JSON.stringify({roleId: getRoleId});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/get_user_role_detail', roleId, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
  deleteUserRoleDetail(getRoleId: String) {
    const roleId = JSON.stringify({roleId: getRoleId});
    return this.http.post(this.baseApiUrl + this.baseFolderUrl + '_api/user/delete_user_role_detail', roleId, this.jwtService.jwt())
      .share()
      .map(
      (response: Response) => response.json()
      );
  }
}
