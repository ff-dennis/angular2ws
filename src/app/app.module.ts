import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";

import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, UsersComponent],
  imports     : [BrowserModule, RouterModule.forRoot(rootRouterConfig)],
  bootstrap   : [AppComponent]
})

export class AppModule {

}
