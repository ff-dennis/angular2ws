import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

import {User} from './user';

@Injectable()
export class UserHardcodedService {
    private users:User[] = [];

    constructor() {
        this.initUsers();
    }

    getUsers() {
        return this.users;
    }

    getUser(userId:number) {
        return _.find(this.users, {'id': userId});
    }

    addUser(user:User) {
        this.users.push(user);
    }

    updateUser(user:User) {
        this.deleteUser(user.id);
        this.addUser(user);
    }

    deleteUser(userId) {
        console.log("Deleting user with id ", userId);
        _.remove(this.users, {id: userId});
    }

    private initUsers():void {
        let christian:User = this.createUser(1, "Christian", "0911 131301-0", "christian.scheil@pentasys.de");
        christian.address = {
            street: "Rothenburger Straße 116",
            suite: "",
            city: "Nürnberg",
            zipcode: "90439",
        };

        let dennis:User = this.createUser(2, "Dennis", "069 707 98 39-0", "dennis.petrick@pentasys.de");
        dennis.address = {
            street: "Solmsstr. 41",
            suite: "",
            city: "Frankfurt",
            zipcode: "60486",
        };

        this.addUser(christian);
        this.addUser(dennis)
    }

    private createUser(id:number, name:string, phone:string, mail:string):User {
        let user:User = new User();
        user.id = id;
        user.email = mail;
        user.phone = phone;
        user.name = name;

        return user;
    }
}