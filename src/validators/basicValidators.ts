import { FormControl } from '@angular/forms';

export class BasicValidators{
    static email(formControl: FormControl){
        let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regEx.test(formControl.value);
        return { validEmail: valid };
    }
}