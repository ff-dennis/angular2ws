import { Component, Output, Input, EventEmitter } from "@angular/core"
import { Post } from "./post"

@Component({
	selector: '[single-post]',
	templateUrl: 'single-post.component.html'
})

export class SinglePostComponent {

	@Input('post') post: Post;
	@Input('username') username:string;

	@Output() postDeleted = new EventEmitter();

	constructor() {
	}

	deleteUser() {
		this.postDeleted.emit(this.post);
	}
}