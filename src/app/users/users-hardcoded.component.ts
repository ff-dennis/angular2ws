import { Component, OnInit } from '@angular/core';

import { UserHardcodedService } from './user-hardcoded.service';
import { User } from './user';

@Component({
	selector: 'users',
	templateUrl: 'users-hardcoded.component.html',
	styles: ['i.glyphicon.glyphicon-remove { cursor: pointer; cursor: hand; }']
})

export class UsersHardcodedComponent implements OnInit {

	users: User[];
	usersLoading = false;

	constructor(private _service: UserHardcodedService) { }

	ngOnInit() {
		this.users = this._service.getUsers();
		console.log("Users geladen ", this.users);
	}

	deleteUser(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			this._service.deleteUser(user.id);
			this.updateUsers();
		}
	}

	updateUsers() {
		this.users = this._service.getUsers();
	}

}