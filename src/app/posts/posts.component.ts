import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UserService } from '../users/user.service';
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

	constructor(private _postService: PostService, private _userService: UserService) { }

	ngOnInit() {
		this.postsLoading = true;

		this._userService.getUsers()
			.subscribe(users => {
				this.users = users;
			});

		this.fetchPosts();
	}

	fetchPosts = () => {
		this._postService.getPosts()
			.subscribe(posts => {
				this.posts = posts.sort((a: Post, b: Post) => {
					return new Date(a.date).getTime() - new Date(b.date).getTime();
				});
				this.postsLoading = false;
			});
	}

	getUserName(post) {
		return _.find(this.users, { id: post.userId }).name;

	}

	// getUserName(post) {
	// 	return this._userService.getUser(post.userId).map(user => { return user.name });
	// 	// return _.find(this.users, { id: post.userId }).name;

	// }

	getUserAvatar(post) {
		return _.find(this.users, { id: post.userId }).avatar;
	}

	removePost(post) {
		if (confirm("Are you sure you want to delete " + post.title + "?")) {
			this._postService.deletePost(post.id)
				.subscribe(this.fetchPosts,
				err => {
					alert("Could not delete the user.");
				});
		}
	}

}