import { decryptData, encryptData } from "../helpers/encrypt";
import Person from "./Person";
import styles from "../view/private/homeAdmin/homeAdmin.styles.css";

export class Administrator extends Person{
    constructor(name,email,password){
        super(name,email,password);
    }

    renderUsers($contentBodyTable){
        $contentBodyTable.innerHTML = 
        `
            ${this.users.map((user)=>
                `
                    <tr class="${styles["body-row"]}" data-event="${user.id_user}">
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${decryptData(user.password)}</td>
                        <td>${user.id_rol === "2" ? "admin": "regularUser"}</td>
                    
                    </tr>
                `
            ).join("")}
        `;


    }

    searchUserForId(idUser){
        return this.users.find(user=>user.id_user === idUser);
    }

    loadDataUser(user,name,email,password){
        name.value = user.name;
        email.value = user.email;
        password.value = decryptData(user.password);
    }
    updateUser(userObtain, name, email, password,id_rol){
        this.users.find(user=>{
            if(user.id_user === userObtain.id_user){
                user.idUser = userObtain.idUser
                user.name = name;
                user.email = email;
                user.password = encryptData(password);
                user.id_rol = id_rol
            }
        })
        this.saveUsers(this.users);
    }
    deleteUser(idUser){
        this.users = this.users.filter(user=>user.id_user !== idUser)
        this.saveUsers(this.users);
    }

    usersLegth(){
        return this.users.length;
    }
    renderCountUsersLegth($elementCount){
        const legthUsers = this.usersLegth();
        $elementCount.textContent = legthUsers;
    }

    static getIdUserParams(){
        const params = new URLSearchParams(window.location.search);
        const idUserGet = params.get("user");
        const idUserSeparate = decryptData(idUserGet.split(" ").join("+"));
        return idUserSeparate;
    }
}