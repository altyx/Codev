import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }          from './app.component';
import {LoginComponent} from "./users/login.component";
import {IndexComponent} from "./index.component";
import {PageNotFoundComponent} from "./pageNotFound.component";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, LoginComponent, IndexComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
