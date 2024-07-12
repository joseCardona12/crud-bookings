import { decryptData, encryptData } from "../helpers/encrypt";

class Person{
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;

        this.administrator = { // Object for administrator
            "id_user": "001",
            "name": "admin",
            "email": "admin@gmail.com",
            "password": encryptData("123"),
            "id_rol": 2
        }
        this.users = JSON.parse(localStorage.getItem("users")) || [this.administrator];
    }

    register(rol_id = 1){
        const generateID = Date.now().toString(30);
        const user = {
            "id_user": generateID,
            "name": this.name,
            "email": this.email,
            "password": encryptData(this.password),
            "id_rol": rol_id
        }
        this.users.push(user)
        localStorage.setItem("users", JSON.stringify(this.users))
    }
    getUser(){
        return this.users;
    }
    findExistsUser(emailUser,passwordUser){
        const foundUser = this.users.find(user=> user.email === emailUser && decryptData(user.password) === passwordUser);
        return foundUser;
    }
    createBooking(){
        return "Method of class Person. Create booking"
    }
}

export default Person;