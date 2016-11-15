import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';
import { Post}          from './post';
import * as _           from 'lodash';

@Injectable()
export class PostService {
    posts:Post[];

    constructor() {
        this.initPosts();
    }

    getPosts() {
        console.log("getPosts", this.posts);
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
        this.posts.push(post);
    }

    updatePost(post) {
        
    }

    deletePost(postId) {
        _.remove(this.posts, {id: postId});
    }

    private initPosts() {
        this.posts = [{
            id: 1,
            date: new Date(),
            title: "1. Titel",
            body: "Spannender Text im 1. Beitrag",
            userId: 1
        }, {
            id: 2,
            date: new Date(),
            title: "2. Titel",
            body: "Gar nicht so spannender Text im 2. Beitrag",
            userId: 2
        }, {
            id: 3,
            date: new Date(),
            title: "3. Titel",
            body: "Noch viel spannender Text im 3. Beitrag",
            userId: 1
        }]
    }



    // private _url = "http://localhost:3000/posts";
    // private _pageSuffix = "?_sort=date&_order=DESC&_page=";

    // constructor(private _http: Http) {
    // }

    // getPosts() {
    //     return this._http.get(this._url)
    //         .map(res => res.json());
    // }

    // getSortedPostsByPage(page: number) {
    //     return this._http.get(this._url + this._pageSuffix + page)
    //         .map(res => res.json());
    // }

    // getPostsByUser(userId) {
    //     return this._http.get(this._url)
    //         .map(res => res.json())
    //         .filter(post => post.userId === userId);
    // }

    // getPost(postId) {
    //     return this._http.get(this.getPostUrl(postId))
    //         .map(res => res.json());
    // }

    // addPost(post) {
    //     return this._http.post(this._url, post)
    //         .map(res => res.json());
    // }

    // updatePost(post) {
    //     return this._http.put(this.getPostUrl(post.id), post)
    //         .map(res => res.json());
    // }

    // deletePost(postId) {
    //     return this._http.delete(this.getPostUrl(postId))
    //         .map(res => res.json());
    // }

    // private getPostUrl(postId) {
    //     return this._url + "/" + postId;
    // }
}