import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Post}        from './post';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Injectable()
export class PostHardcodedService {
    posts:Post[];

    constructor() {
        this.initPosts();
    }

    getPosts() {
        return this.posts;
    }
    
    getPostsByUser(userId) {
        return _.find(this.posts, { userId: userId});
    }

    getPost(postId) {
        console.log("find post", typeof postId, postId, this.posts, _.find(this.posts, { id: postId}));
        return _.find(this.posts, { id: postId});
    }

    addPost(post) {

    }

    updatePost(post) {

    }

    deletePost(postId) {

    }

    private initPosts() {
        this.posts = [{
            id: 1,
            date: null,
            title: "1. Titel",
            body: "Spannender Text im 1. Beitrag",
            userId: "1"
        }, {
            id: 2,
            date: null,
            title: "2. Titel",
            body: "Gar nicht so spannender Text im 2. Beitrag",
            userId: "2"
        }, {
            id: 3,
            date: null,
            title: "3. Titel",
            body: "Noch viel spannender Text im 3. Beitrag",
            userId: "1"
        }]
    }
}