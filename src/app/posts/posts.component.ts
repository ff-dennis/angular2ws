import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';
import { User } from '../users/user';
import { Post } from './post';

import * as _ from 'lodash';


@Component({
	selector: 'posts',
	templateUrl: 'posts.component.html'
})

export class PostsComponent {

	posts: Post[];
	postsLoading = false;
	users: User[];

	constructor(private _postService: PostService, private _userService: UserService) { }

	ngOnInit() {
		this.postsLoading = true;

		this._userService.getUsers()
			.subscribe(users => {
				this.users = users;
			});
			
		this._postService.getPosts()
			.subscribe(posts => {
				this.posts = posts;
				this.postsLoading = false;
			});

		
	}

	getUserName(post) {
		return _.find(this.users, { id: post.userId }).name;

	}

}