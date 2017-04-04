import { Component } from '@angular/core';

import { User } from './User';

@Component({
    templateUrl: '../views/users/inscription.html'
})

export class InscriptionComponent {

    model = new User(null,null,null,null,null);
    submitted = false;

    onSubmit() {
        this.submitted = true;
        console.log(this.model);
    }
}