import {Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {UsersOverviewComponent} from './users/users.overview.component';
import {PostsComponent} from './posts/posts.component';
import { NotFoundComponent } from './notfound.component';

import {UserFormComponent} from './users/user-form.component';

import {UsersHardcodedComponent} from './users/users-hardcoded.component';
import {UserFormHardcodedComponent} from './users/user-form-hardcoded.component';

export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'users', component: UsersOverviewComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'users-hardcoded', component: UsersHardcodedComponent },
    { path: 'users-hardcoded/:id', component: UserFormHardcodedComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
    ];
