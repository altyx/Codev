import { Component } from '@angular/core';

import { User } from 'user';

@Component({
    selector: 'LoginForm',
    templateUrl: '../views/users/login.html'
})

export class LoginComponent {

    model = new User(null,null);
    submitted = false;

    onSubmit() {
        this.model = new User('','');
        this.submitted = true;
        console.log(this.model);
    }
}