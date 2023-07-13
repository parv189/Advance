import { DbContext } from "../db/db-context";
import { User } from "../models/user.model";

export class UserRepository{
    
    constructor(){
        this.dbContext = new DbContext();
    }

     dbContext:DbContext;

    create(user:User){
        this.dbContext.users.push(user);
    }

    getAll(){
       return this.dbContext.users;
    }
}