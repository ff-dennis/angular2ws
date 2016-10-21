import {Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {UsersOverviewComponent} from './users/users.overview.component';
import {PostsComponent} from './posts/posts.component';
import { NotFoundComponent } from './notfound.component';

import {UserFormComponent} from './users/user-form.component';

export const rootRouterConfig: Routes = [
    { path: 'home', component: AgendaComponent },
    { path: 'users', component: UsersOverviewComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'home' }
    ];
