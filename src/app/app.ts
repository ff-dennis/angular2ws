import {Component} from '@angular/core';
import {NavbarComponent} from './navigation/navbar.component'

@Component({
  selector: 'app',
  template: `
    <h3>
      Angular 2 Blog
    </h3>
    <navbar></navbar>
  `,
  directives: [NavbarComponent]
})
export class AppComponent {
}
