import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { UserHardcodedService }                  from './user-hardcoded.service';
import { User }                                  from './user';
import { Address }                                  from './address';

@Component({
    templateUrl: 'user-form-hardcoded.component.html'
})
export class UserFormHardcodedComponent implements OnInit {
    userAddressForm: FormGroup;
    title: string;
    user = new User();

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _userService: UserHardcodedService
    ) {
       
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

    addAdress():void {
        this.user.address = new Address();
        this.userAddressForm = this._fb.group({
                //formControlName: [ formControlConfig initialisation like {value: 'n/a', disabled: true}, sync validator, async validator]
                street: ['', Validators.required],
                streetnumber: ['', Validators.compose([Validators.required, Validators.pattern("[0-9a-z]+")])],
                city: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-ZüÜöÖäÄ ]*")])],
                zipcode: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]{5}")])]
        });
    }

    save() {
        console.log("Save user", this.user);
        var result;

        if (this.user.id) {
            this._userService.updateUser(this.user);
        } else {
             this._userService.addUser(this.user)
        }

        console.log("User gespeichert: ", this._userService.getUsers());

        this._router.navigate(['users-hardcoded']);
    }
}