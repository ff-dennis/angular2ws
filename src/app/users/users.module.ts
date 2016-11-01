import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { User }                from './user';
import { SingleUserComponent }      from './single.user.component';

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
        SingleUserComponent,
        UsersHardcodedComponent,
        UserFormHardcodedComponent
    ],
    exports: [
        SingleUserComponent,
        UsersHardcodedComponent,
        UserFormHardcodedComponent
    ],
    providers: [
        UserHardcodedService
    ]
})
export class UsersModule { 
}