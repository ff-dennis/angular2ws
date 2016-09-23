import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'users',
	templateUrl: 'users.component.html'
})

export class UsersComponent {

	users = [];

	constructor(){
		this.users.push({
			"name":"Fred",
			"email":"Fred.Feuerstein@pentasys.de"
		});
		this.users.push({
			"name":"Barney",
			"email":"Barney.Geröllheimer@pentasys.de"
		});
	}
}