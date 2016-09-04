import {Routes} from '@angular/router';		
import {HomeComponent} from './home/home.component';		
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
 		
export const rootRouterConfig: Routes = [				
   {path: 'home', component: HomeComponent},		
   {path: 'users', component: UsersComponent},		
   {path: 'posts', component: PostsComponent},		
   {path: '**', redirectTo: 'home'}]	
 