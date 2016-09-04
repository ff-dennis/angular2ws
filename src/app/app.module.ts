import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [AppComponent],
  imports     : [BrowserModule],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
