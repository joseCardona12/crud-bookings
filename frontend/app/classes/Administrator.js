import Person from "./Person";

export class Administrator extends Person{
    constructor(name,email,password){
        super(name);
        this.email = email;
        this.password = password;
    }
}