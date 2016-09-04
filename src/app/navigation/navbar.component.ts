import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
	_isCollapsed = true;

	constructor(private _router: Router) { }

	isCurrentRoute(route: string) {
		return this._router.isActive(route, true);
	}

	toggleCollapse() {
		this._isCollapsed = !this._isCollapsed;
	}
}