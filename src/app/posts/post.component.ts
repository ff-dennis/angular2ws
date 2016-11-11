import { Component, Input, Output, EventEmitter, OnInit }   from '@angular/core'
import { Post }                                             from './post'
import { UserService }                                      from './../users/user.service'


@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
	styles: ['a.card-link { cursor: pointer; cursor: hand; }']
})

export class PostComponent {

    private userName$;
    private userAvatar$;

    @Input('post') _post: Post;
    @Output() postDeleted = new EventEmitter();

    constructor(private _userService: UserService) {
    }

    ngOnInit() {
        this.userName$ = this._userService.getUser(this._post.userId).map(user => { return user.name });
        this.userAvatar$ = this._userService.getUser(this._post.userId).map(user => { return user.avatar; });
    }

    removePost() {
        this.postDeleted.emit(this._post);
    }
}