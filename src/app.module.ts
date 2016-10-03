import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core'
import { RouterModule } from "@angular/router";

import { rootRouterConfig } from "./app.routes";
import { AppComponent } from "./app";

// main navigation
import { NavbarComponent } from "./navbar/navbar.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { PostsComponent } from "./posts/posts.component";

// modules
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AgendaComponent, PostsComponent],
  imports: [BrowserModule, RouterModule.forRoot(rootRouterConfig), UsersModule],
  bootstrap: [AppComponent],
  providers: []
})

export class AppModule {

}
