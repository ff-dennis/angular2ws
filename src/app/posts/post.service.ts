import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    private _url = "http://localhost:3000/posts";

    constructor(private _http: Http) {
    }

    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    getPostsByUser(userId) {
        return this._http.get(this._url)
            .map(res => res.json())
            .filter(post => post.userId === userId);
    }

    getPost(postId) {
        return this._http.get(this.getPostUrl(postId))
            .map(res => res.json());
    }

    addPost(post) {
        return this._http.post(this._url, post)
            .map(res => res.json());
    }

    updatePost(post) {
        return this._http.put(this.getPostUrl(post.id), post)
            .map(res => res.json());
    }

    deletePost(postId) {
        return this._http.delete(this.getPostUrl(postId))
            .map(res => res.json());
    }

    private getPostUrl(postId) {
        return this._url + "/" + postId;
    }
}