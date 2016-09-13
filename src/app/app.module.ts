// System Modules
import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";

// Routing
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";

// Application Components
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AgendaComponent} from "./agenda/agenda.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, AgendaComponent],
  imports     : [BrowserModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [],
  bootstrap   : [AppComponent]
})

export class AppModule {

}
