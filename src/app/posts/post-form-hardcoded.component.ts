import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PostHardcodedService } from './post-hardcoded.service';
import { UserHardcodedService } from './../users/user-hardcoded.service';
import { Post } from './post';
import { User } from './../users/user';

@Component({
    templateUrl: 'post-form-hardcoded.component.html'
})
export class PostFormHardcodedComponent implements OnInit {
    postForm: FormGroup;
    title: string;
    post = new Post();
    users: User[];

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _postService: PostHardcodedService,
        private _userService: UserHardcodedService
    ) {
        this.postForm = fb.group({
            //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
            user: [],
            title: ['', Validators.required],
            body: ['', Validators.compose([Validators.required, Validators.maxLength(150)])]
        });
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            var id = parseInt(params["id"]);

            this.title = (id == undefined) ? "Post create" : "Post edit";

            if (id == undefined) {
                this.post.date = new Date();
                return;
            }

            this.post = this._postService.getPost(id);
            console.log("Post:", this.post);
        });

        this.users = this._userService.getUsers();
    }

    save() {
        var result;

        console.log(this.post);

        if (this.post.id === undefined) {
            result = this._postService.addPost(this.post)
        }
        else {
            result = this._postService.updatePost(this.post);
        }

        // this.userForm.markAsPristine();
        this._router.navigate(['posts']);
    }
}