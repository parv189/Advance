import { User } from "../models/user.model";

export class DbContext{

    constructor(){
        this.users = new Array<User>();
    }
    users:Array<User>;
}