import {Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {PostsComponent} from './posts/posts.component';
import {PostFormHardcodedComponent} from './posts/post-form-hardcoded.component';
import { NotFoundComponent } from './notfound.component';


import {UsersHardcodedComponent} from './users/users-hardcoded.component';
import {UserFormHardcodedComponent} from './users/user-form-hardcoded.component';

export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'users-hardcoded', component: UsersHardcodedComponent },
    { path: 'users-hardcoded/new', component: UserFormHardcodedComponent },
    { path: 'users-hardcoded/:id', component: UserFormHardcodedComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'posts/new', component: PostFormHardcodedComponent },
    { path: 'posts/:id', component: PostFormHardcodedComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
    ];
