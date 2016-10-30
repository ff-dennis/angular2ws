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

import { UserHardcodedService }         from './user-hardcoded.service';
import { UsersHardcodedComponent }         from './users-hardcoded.component';
import { UserFormHardcodedComponent }   from './user-form-hardcoded.component';

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
        SingleUserComponent,
        UsersHardcodedComponent,
        UserFormHardcodedComponent
    ],
    exports: [
        UserFormComponent, 
        UsersOverviewComponent,
        SingleUserComponent,
        UsersHardcodedComponent,
        UserFormHardcodedComponent
    ],
    providers: [
        UserService,
        UserHardcodedService
    ]
})
export class UsersModule { 
}