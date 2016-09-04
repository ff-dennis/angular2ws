import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
	private _router;

	constructor(router: Router) {
		this._router = router;
	}

	isCurrentRoute(route: string) {
		return this._router.isActive(route, true);
	}
}