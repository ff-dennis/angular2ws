import { Component, OnInit } 	from '@angular/core';

import { UserService } 			from './user.service';
import { User } 				from './user';
import { UserComponent } 		from './user.component';

@Component({
	selector: 'users-overview',
	templateUrl: 'users.overview.component.html',
	styles: ['i.glyphicon.glyphicon-remove { cursor: pointer; cursor: hand; }']
})

export class UsersOverviewComponent implements OnInit {

	users: User[];
	usersLoading = false;

	constructor(private _service: UserService) { }

	ngOnInit() {
		this.usersLoading = true;
		this._service.getUsers()
			.subscribe(users => {
				this.users = users;
				this.usersLoading = false;
			});
	}

	deleteUser(user) {
		if (confirm("Are you sure you want to delete " + user.name + "?")) {
			var index = this.users.indexOf(user)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._service.deleteUser(user.id)
				.subscribe(null,
				err => {
					alert("Could not delete the user.");
					// Revert the view back to its original state
					// by putting the user object at the index
					// it used to be.
					this.users.splice(index, 0, user);
				});
		}
	}

}