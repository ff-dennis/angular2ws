import {Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {PostsComponent} from './posts/posts.component';
import { NotFoundComponent } from './notfound.component';


import {UsersHardcodedComponent} from './users/users-hardcoded.component';
import {UserFormHardcodedComponent} from './users/user-form-hardcoded.component';

export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'users-hardcoded', component: UsersHardcodedComponent },
    { path: 'users-hardcoded/:id', component: UserFormHardcodedComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
    ];
