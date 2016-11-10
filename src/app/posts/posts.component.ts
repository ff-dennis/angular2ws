import { Component, OnInit } from '@angular/core';
import { PostHardcodedService } from './post-hardcoded.service';
import { UserHardcodedService } from '../users/user-hardcoded.service';
import { User } from '../users/user';
import { Post } from './post';

import * as _ from 'lodash';


@Component({
	selector: 'posts',
	templateUrl: 'posts.component.html',
	styles: ['a.card-link { cursor: pointer; cursor: hand; }']
})

export class PostsComponent {

	posts: Post[];
	postsLoading = false;
	users: User[];

	constructor(private _postService: PostHardcodedService, private _userService: UserHardcodedService) { }

	ngOnInit() {
		this.postsLoading = true;

		this.users = this._userService.getUsers();

		this.fetchPosts();
	}

	fetchPosts = () => {
		this.posts = this._postService.getPosts();
		// posts = _.sortBy(posts, (a: Post, b: Post) => {
		// 			return new Date(a.date).getTime() - new Date(b.date).getTime();
		// 		});
	}

	getUserName(post) {
		let user:User = _.find(this.users, { id: post.userId });
		return user ? user.name : "Unbekannt";
	}

	removePost(post) {
		if (confirm("Are you sure you want to delete " + post.title + "?")) {
			this._postService.deletePost(post.id);
			this.fetchPosts();
		}
	}

}