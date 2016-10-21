import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { User }                from './user';
import { UserFormComponent }   from './user-form.component';
import { UsersOverviewComponent }      from './users.overview.component';
import { SingleUserComponent }      from './single.user.component';
import { UserService }         from './user.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        UserFormComponent, 
        UsersOverviewComponent,
        SingleUserComponent
    ],
    exports: [
        UserFormComponent, 
        UsersOverviewComponent,
        SingleUserComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule { 
}