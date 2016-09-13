import {Routes} from '@angular/router';

import {AgendaComponent} from './agenda/agenda.component';

export const rootRouterConfig: Routes = [
    { path: 'agenda', component: AgendaComponent },
    { path: '**', redirectTo: 'agenda' }]
