import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { CustomValidators }                      from '../validators/customValidators';
import { UserHardcodedService }                  from './user-hardcoded.service';
import { User }                                  from './user';

@Component({
    templateUrl: 'user-form.component.html'
})
export class UserFormHardcodedComponent implements OnInit {
    userForm: FormGroup;
    title: string;
    user = new User();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UserHardcodedService
    ) {
        // this.userForm = fb.group({
        //     //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
        //     name: ['', Validators.required],
        //     email: ['', Validators.compose([Validators.required, CustomValidators.email])],
        //     phone: [],
        //     avatar: ['', Validators.required],
        //     address: fb.group({
        //         street: ['', Validators.required],
        //         streetnumber: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+")])],
        //         city: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZüÜöÖäÄ ]*")])],
        //         zipcode: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{5}")])]
        //     })
        // });
    }

    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

            this.title = id ? "Nutzer bearbeiten" : "Nutzer anlegen ";

            if (!id)
                return;

            this.user = this._userService.getUser(id);
            if (!this.user) {
                console.log("User nicht gefunden", id);
                this._router.navigate(['NotFound']);
            }
        });
    }

    save() {
        var result;

        if (this.user.id)
            result = this._userService.updateUser(this.user);
        else
            result = this._userService.addUser(this.user)

        result.subscribe(x => {
            // this.userForm.markAsPristine();
            this._router.navigate(['users-hardcoded']);
        });
    }
}