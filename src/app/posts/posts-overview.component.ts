import { Component, OnInit } 	from '@angular/core';
import { PostService } 			from './post.service';
import { UserService } 			from '../users/user.service';
import { User } 				from '../users/user';
import { Post } 				from './post';

import * as _ 					from 'lodash';

@Component({
	selector: 'posts-overview',
	templateUrl: 'posts-overview.component.html'
})

export class PostsOverviewComponent {

	postsLoading = false;
	posts: Post[];

	constructor(private _postService: PostService, private _userService: UserService) { }

	ngOnInit() {
		// this.postsLoading = true;

		this.fetchPosts();
	}

	fetchPosts = () => {
		this.posts = this._postService.getPosts();
		// posts = _.sortBy(posts, (a: Post, b: Post) => {
		// 			return new Date(a.date).getTime() - new Date(b.date).getTime();
		// 		});
	}

	removePost(post) {
		if (confirm("Are you sure you want to delete " + post.title + "?")) {
			this._postService.deletePost(post.id);
			this.fetchPosts();
		}
	}



	// ngOnInit() {
	// 	this.postsLoading = true;
	// 	this.fetchPosts(1);
	// }

	// fetchPosts = (page: number) => {
	// 	this.postsLoading = true;
	// 	this._postService.getSortedPostsByPage(page)
	// 		.subscribe(
	// 		posts => {
	// 			this._posts = (posts.sort((a: Post, b: Post) => {
	// 				return new Date(b.date).getTime() - new Date(a.date).getTime();
	// 			}));
	// 		},
	// 		null,
	// 		() => { this.postsLoading = false; })
	// }

	// removePost(post) {
	// 	if (confirm("Are you sure you want to delete " + post.title + "?")) {
	// 		this._postService.deletePost(post.id)
	// 			.subscribe(this.fetchPosts,
	// 			err => {
	// 				alert("Could not delete the post.");
	// 			});
	// 	}
	// }

	// onPageChanged(page) {
	// 	this.fetchPosts(page);
	// }
}