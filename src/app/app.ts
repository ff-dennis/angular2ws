import {Component} from '@angular/core';
import {NavbarComponent} from './navigation/navbar.component'

@Component({
  selector: 'app',
  templateUrl: './app.html',
  directives: [NavbarComponent]
})
export class AppComponent {
}
