import { decryptData, encryptData } from "../helpers/encrypt";
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
    }
    createBooking(){
        
    }
    static getUsers(){
        return this.users = JSON.parse(localStorage.getItem("users")) || [];
    }
    static findExistsUser(emailUser,passwordUser,users){
        const foundUser = users.find(user=> user.email === emailUser && decryptData(user.password) === passwordUser);
        return foundUser;
    }
    
}

export default RegularUser