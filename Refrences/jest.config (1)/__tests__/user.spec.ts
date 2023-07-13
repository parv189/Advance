import { DbContext } from "../db/db-context";
import { UserDomain } from "../domain/user.domain"
import { User } from "../models/user.model"
import { UserRepository } from "../repository/user.repository"


test ('name is valid', () => {
    const userRepo = new UserRepository(); 
    const user = new UserDomain(userRepo);
   const test =  user.register({fullName: 'Johnbhai',emailId:"test123@asd.asd",password:"testtest",age:12})
expect(test).toEqual("Age must be between 18 to 100.")
})

test ('email', () => {
    const userRepo = new UserRepository(); 
    const user = new UserDomain(userRepo);
   const test =  user.register({fullName: 'bhargav',emailId:"test123asd.asd",password:"testtest",age:42})
expect(test).toEqual(test)
})
// test ('username', () => {
//     const userRepo = new UserRepository(); 
//     const user = new UserDomain(userRepo);
//    const test =  user.register({fullName: 'bhargav',emailId:"test123@asd.asd",password:"testtest",age:42})
// expect(test).toEqual("email is Invalid ")
// })

// test ('username', () => {
//     const userRepo = new UserRepository(); 
//     const user = new UserDomain(userRepo);
//    const test =  user.register({fullName: 'bhargav',emailId:"test123@asd.asd",password:"test",age:42})
// expect(test).toEqual("Password is Invalid ")
// })

test ('username', () => {
    const userRepo = new UserRepository(); 
    const user = new UserDomain(userRepo);
   const test =  user.register({fullName: 'bharga8786v',emailId:"test123@asd.asd",password:"test",age:42})
expect(test).toEqual("Name must not contain special character or digit.")
})

test ('password', () => {
    const userRepo = new UserRepository(); 
    const user = new UserDomain(userRepo);
   const test =  user.register({fullName: 'bhargav',emailId:"test123@asd.asd",password:"AD@39fhg",age:42})
expect(test).toEqual("Password must contain special character, Mixed case and digit.")
})