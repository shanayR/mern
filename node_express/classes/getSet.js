class User{
    constructor(userName,password){
        this.userName = userName;
        this.password = password;
    }
    
}

class Admin extends User{
    
    // checkPass(){
    //     if (this.password.length < 5){
    //         console.log('minimum password length is 5')
    //         // console.error('minimum password length is 5');
    //         return
    //     }
    //     else{console.log('all good');}
    // }

    // do with get and set
    get check(){

        const len = Math.ceil(Math.log10(this.password + 1));
        if (this.password.length < 5 || len < 5){
                    console.log('minimum password length is 5')
                    // console.error('minimum password length is 5');
                    return
                }
                else{console.log('all good');}    
    }

    get deleteUser(){
        let userIndex = Math.floor(Math.random()*10);
        
        while (userIndex >= users.length) {
            userIndex = Math.floor(Math.random()*10);
        }
        // delete random user using delete function
        delete users[userIndex];

        // delete random user using array method
        // users.shift(userIndex)

        // delete last user using delete function
        // delete users[users.length-1];        

        // using array method delete last user
        users.pop()

        return "Admins can delete user";

    }
    deleteUserX(userIndex){
        // delete users[userIndex]
        // using array methods
        users.shift(userIndex);
    }

}

const user1 = new User("John",123);
const user2 = new User("Alex",12345);
const user3 = new User("Damon",24432);
const user4 = new User("Elena","3443");
const user5 = new User("Hannah",1111);
const user6 = new User("Mary",7474747);


// user1.checkPass();
const users = [user1,user2,user3,user4,user5,user6]
// delete users[1];;
const admin1 = new Admin("abcd",111,true)

admin1.check;

// admin1.deleteUser

// admin1.deleteUserX(0)

// console.log(users);




// delete user
