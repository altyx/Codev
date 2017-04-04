import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
    constructor (private http: Http){	}

    private _userUrl = '/apilogin';
    private _loginurl = 'local.dev/codev/api/users/test';

    login(email: string, password: string){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this._loginurl, { email, password }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }


}
