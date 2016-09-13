import {Routes} from '@angular/router';

import {AgendaComponent} from './agenda/agenda.component';
import {UsersComponent} from './users/users.component';

export const rootRouterConfig: Routes = [
    { path: 'agenda', component: AgendaComponent },
    { path: 'users', component: UsersComponent },
    { path: '**', redirectTo: 'agenda' }]
