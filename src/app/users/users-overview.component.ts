import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';
import { UserComponent } from './user.component';

@Component({
	selector: 'users-overview',
	templateUrl: 'users-overview.component.html',
	styleUrls: ["users-overview.css"]
})

export class UsersOverviewComponent implements OnInit {

	users: User[];
	usersLoading = false;

	constructor(private _service: UserService) { }

	ngOnInit() {
		// this.users = this._service.getUsers();
		this.users = this.initUsers();
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

	//For use in part 1 (without service!)
	private initUsers(): User[] {
		let christian: User = {
			id: 1,
			avatar: "",
			email: "	christian.scheil@pentasys.de",
			name: "Christian",
			phone: "",
			address: {
				street: "Rothenburger Straße 116",
				streetnumber: "116",
				city: "Nürnberg",
				zipcode: "90439",
			}
		};
		let dennis: User = {
			id: 2,
			avatar: "",
			email: "dennis.petrick@pentasys.de",
			name: "Dennis",
			phone: "",
			address: {
				street: "Solmsstr. 41",
				streetnumber: "41",
				city: "Frankfurt",
				zipcode: "60486",
			}
		};
		let offenbacher: User = {
			id: 3,
			avatar: "",
			email: "",
			name: "Otto vom DWD",
			phone: "069 - 0000",
			address: {
				street: "Frankfurter Str. 135",
				streetnumber: "135",
				city: "Offenbach",
				zipcode: "63067",
			}
		};
		let homeless: User = {
			id: 4,
			avatar: "",
			email: "",
			name: "Nobody",
			phone: "",
			address: undefined
		}

		return [christian, dennis, offenbacher, homeless];
	}



	// users: User[];
	// usersLoading = false;

	// constructor(private _service: UserService) { }

	// ngOnInit() {
	// 	this.usersLoading = true;
	// 	this._service.getUsers()
	// 		.subscribe(users => {
	// 			this.users = users;
	// 			this.usersLoading = false;
	// 		});
	// }

	// fetchUsers = () => {
	// 	this._service.getUsers()
	// 		.subscribe(users => {
	// 			this.users = users;
	// 			this.usersLoading = false;
	// 		},
	// 		err => {
	// 			alert("Could not load users.");
	// 		});
	// }

	// deleteUser(user) {


	// 	if (confirm("Are you sure you want to delete " + user.name + "?")) {
	// 		this._service.deleteUser(user.id)
	// 			.subscribe(
	// 				this.fetchUsers,
	// 			err => {
	// 				alert("Could not delete the user.");
	// 			});
	// 	}
	// }

}