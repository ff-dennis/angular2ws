import { Component, OnInit } from '@angular/core';

import { UserHardcodedService } from './user-hardcoded.service';
import { User } from './user';

@Component({
	selector: 'users',
	templateUrl: 'users-hardcoded.component.html',
    styleUrls: ['./users.css']
})

export class UsersHardcodedComponent implements OnInit {

	users: User[];
	usersLoading = false;

	constructor(private _service: UserHardcodedService) { }

	ngOnInit() {
		this.users = this._service.getUsers();
		//this.users = this.initUsers();
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
    private initUsers():User[] {
        let christian:User = {
            id:1,
            email:"	christian.scheil@pentasys.de",
            name:"Christian",
            phone: "",
            address : {
                street: "Rothenburger Straße 116",
                suite: "",
                city: "Nürnberg",
                zipcode: "90439",
            }
        };
        let dennis:User = {
            id: 2,
            email:"dennis.petrick@pentasys.de",
            name:"Dennis",
            phone: "",
            address : {
                street: "Solmsstr. 41",
                suite: "",
                city: "Frankfurt",
                zipcode: "60486",
            }
        };
        let offenbacher:User = {
            id: 3,
            email:"",
            name:"Otto vom DWD",
            phone: "069 - 0000",
            address : {
                street: "Frankfurter Str. 135",
                suite: "",
                city: "Offenbach",
                zipcode: "63067",
            }
        };
		let homeless:User = {
			id: 4,
            email:"",
            name:"Nobody",
            phone: "",
            address : undefined
		}
        
        return [christian, dennis];
    }

}