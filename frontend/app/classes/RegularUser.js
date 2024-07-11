import { encryptData } from "../helpers/encrypt";
import Auth from "./Auth";
import Person from "./Person";

class RegularUser extends Person{
    constructor(name,email,password){
        super(name);
        this.email = email;
        this.password = password
    }
    register(){
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const generateID = Date.now().toString(30);
        const user = {
            "id_user": generateID,
            "name": this.name,
            "email": this.email,
            "password": encryptData(this.password),
            "id_rol": 1
        }
        users.push(user)
        localStorage.setItem("users", JSON.stringify(users))
        Auth.login(); // Is called method login of class Auth
    }
    
}

export default RegularUser