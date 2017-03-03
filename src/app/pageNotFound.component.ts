import { Component } from '@angular/core';


@Component({
    template: `<p>Erreur 404 rien ici</p>`
})


export class PageNotFoundComponent {

    ngOnInit() { this.getEvent(); }

    getEvent() {
        console.log('404');
    }

}