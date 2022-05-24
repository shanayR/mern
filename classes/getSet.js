class User{
    constructor(userName,password){
        this.userName = userName;
        this.password = password;
    }
    
}

class Admin extends User{
    checkPass(){
        if (this.password.length < 5){
            console.log('minimum password length is 5')
            // console.error('minimum password length is 5');
            return
        }
        else{console.log('all good');}
    }
}

const user1 = new Admin("abcd","111")
user1.checkPass()

// do with get and set