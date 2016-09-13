import { Component } from '@angular/core'
import {NavbarComponent} from './navbar/navbar.component'

@Component({
    selector: 'app',
    template: `
    <h3>
        Angular 2 Blog
    </h3>
    <navbar></navbar>
    `
})
export class AppComponent { }
