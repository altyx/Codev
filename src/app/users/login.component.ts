import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './User';
import { UserService } from './user.service';

@Component({
    selector: 'LoginForm',
    templateUrl: '../views/users/login.html',
    providers: [ UserService  ]
})

export class LoginComponent {

    model = new User(null,null,null,null,null);
    submitted = false;
    mode = 'Observable';
    user: User[];
    errorMessage: string;
    constructor (private userService: UserService) {}
    onSubmit() {
        this.submitted = true;
        console.log(this.model);
    }

    login () {
        console.log(this.model);
        if (!this.model.email && !this.model.password) { return; }
        this.userService.login(this.model.email, btoa(this.model.password))
            .subscribe(
                data  => this.user.push(data),
                error =>  this.errorMessage = 'error');
    }
}