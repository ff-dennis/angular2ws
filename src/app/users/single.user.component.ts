import { Component, Output, Input, EventEmitter } from "@angular/core"
import { User } from "./user"

@Component({
	selector: '[single-user]',
	templateUrl: 'single.user.component.html',
	styles: ['i.fa.fa-trash-o { cursor: pointer; cursor: hand; }']
})

export class SingleUserComponent {

	@Input('user') _user: User;
	@Output() userDeleted = new EventEmitter();


	constructor() {
	}

	deleteUser() {
		this.userDeleted.emit(this._user);
	}
}