import {Routes} from '@angular/router';
import {AgendaComponent} from './agenda/agenda.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';

import {UserFormComponent} from './users/user-form.component';

export const rootRouterConfig: Routes = [
    { path: '/', component: AgendaComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/new', component: UserFormComponent },
    { path: 'users/:id', component: UserFormComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', redirectTo: 'home' }]
