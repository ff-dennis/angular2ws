import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { UserHardcodedService } from '../users/user-hardcoded.service';
import { User } from '../users/user';
import { Post } from './post';


@Component({
	selector: 'posts',
	templateUrl: 'posts.component.html'
})

export class PostsComponent {

	posts: Post[];
	postsLoading = false;

	constructor(private _postService: PostService, private _userService: UserHardcodedService) { }

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(posts => {
				this.postsLoading = true;
				this.posts = posts;
				this.postsLoading = false;
			});
	}

	getUserName(post){
		// return this._userService.getUser(post.userId).subscribe(function(user){
		// 	return user.name;
		// }
			// user => user.name 
		// );
		return post.userId;
	}
	
}