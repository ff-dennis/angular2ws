import {Routes} from '@angular/router';

import {AgendaComponent} from './agenda/agenda.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';

export const rootRouterConfig: Routes = [
    { path: 'agenda', component: AgendaComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', redirectTo: 'agenda' }]
