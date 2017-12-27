import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }
    public isAuthenticate(): boolean {
        let isAuth = false;
        const user = JSON.parse(this.getUserToken());
//      let user = this.getUserToken();
//      console.log(user);
        if (user !== null && user !== undefined) {
                                isAuth = true;
        } else {
          isAuth = false;
        }
        return isAuth;
    }

    public getUserToken(): any {
        return localStorage.getItem('currentUser');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
