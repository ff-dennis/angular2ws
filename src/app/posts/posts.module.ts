import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { Post }                from './post';
import { PostsComponent }      from './posts.component';
import { SinglePostComponent } from './single-post.component';
import { PostFormHardcodedComponent }   from './post-form-hardcoded.component';
import { PostService }         from './post.service';
import { PostHardcodedService }         from './post-hardcoded.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        PostFormHardcodedComponent,
        PostsComponent,
        SinglePostComponent
    ],
    exports: [
        PostFormHardcodedComponent,
        PostsComponent,
        SinglePostComponent
    ],
    providers: [
        PostService,
        PostHardcodedService
    ]
})
export class PostsModule { 
}