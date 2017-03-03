import { Component } from '@angular/core';


@Component({
    templateUrl: '../views/index.html'
})


export class IndexComponent {

    ngOnInit() { this.getEvent(); }

    getEvent() {
        console.log('index');
    }

}