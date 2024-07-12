import Person from "./Person";

class Administrator extends Person{
    constructor(name,email,password){
        super(name);
        this.email = email;
        this.password = password;
    }
    createBooking(){

    }
}