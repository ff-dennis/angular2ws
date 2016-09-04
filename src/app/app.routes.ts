import {Routes} from '@angular/router';		
import {HomeComponent} from './home/home.component';		
import {UsersComponent} from './users/users.component';
 		
export const rootRouterConfig: Routes = [				
   {path: 'home', component: HomeComponent},		
   {path: 'users', component: UsersComponent},		
   {path: '**', redirectTo: 'home'}]	
 