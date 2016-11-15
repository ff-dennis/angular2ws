// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';



import { Injectable } from '@angular/core';
import { User } from './user';
import * as _ from 'lodash';

@Injectable()
export class UserService {
    private users: User[] = [];

    constructor() {
        console.log("UserService constructed");
        this.initUsers();
    }

    getUsers() {
        return this.users;
    }

    getUser(userId: number) {
        return _.find(this.users, { 'id': userId });
    }

    addUser(user: User) {
        this.users.push(user);
    }

    updateUser(user: User) {
        this.deleteUser(user.id);
        this.addUser(user);
    }

    deleteUser(userId: number) {
        console.log("Deleting user with id ", userId);
        _.remove(this.users, { id: userId });
    }

    private initUsers(): void {
        let christian: User = this.createUser(1, "Christian", "0911 131301-0", "sc@pentasys.de");
        christian.address = {
            street: "Rothenburger Straße 116",
            suite: "",
            city: "Nürnberg",
            zipcode: "90439",
        };

        let dennis: User = this.createUser(2, "Dennis", "069 707 98 39-0", "dp@pentasys.de");
        dennis.address = {
            street: "Solmsstr. 41",
            suite: "",
            city: "Frankfurt",
            zipcode: "60486",
        };

        this.addUser(christian);
        this.addUser(dennis)
    }

    private createUser(id: number, name: string, phone: string, mail: string): User {
        let user: User = new User();
        user.id = id;
        user.avatar = "https://media.glassdoor.com/sqll/1118958/pentasys-squarelogo-1450858007765.png";
        user.email = mail;
        user.phone = phone;
        user.name = name;

        return user;
    }











    // private _url = "http://localhost:3000/users";

    // constructor(private _http: Http) {
    // }

    // getUsers() {
    //     return this._http.get(this._url)
    //         .map(res => res.json());
    // }

    // getUser(userId) {
    //     return this._http.get(this.getUserUrl(userId))
    //         .map(res => res.json());
    // }

    // addUser(user) {
    //     return this._http.post(this._url, user)
    //         .map(res => res.json());
    // }

    // updateUser(user) {
    //     return this._http.put(this.getUserUrl(user.id), user)
    //         .map(res => res.json());
    // }

    // deleteUser(userId) {
    //     return this._http.delete(this.getUserUrl(userId))
    //         .map(res => res.json());
    // }

    // private getUserUrl(userId): string {
    //     return this._url + "/" + userId;
    // }
}