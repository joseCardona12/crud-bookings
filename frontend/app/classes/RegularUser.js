
import Person from "./Person";

class RegularUser extends Person{
    constructor(name,email,password){
        super(name,email,password);
    } 
    createBooking(){
        
    }   
}

export default RegularUser