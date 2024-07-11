import Auth from "../../../classes/Auth";
import RegularUser from "../../../classes/RegularUser";

export const controller = () =>{
    const $formLogin = document.getElementById("formLogin");
    $formLogin.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $emailUser = document.getElementById("emailUser");
        const $passwordUser = document.getElementById("passwordUser");
        
        const usersGet = RegularUser.getUsers(); // Is called the method getUsers
        const existsUserFind = RegularUser.findExistsUser($emailUser.value, $passwordUser.value,usersGet); // Verify exists user for email and password
        if(!existsUserFind){
            console.log({message: "User not found"});
            return;
        }
        Auth.login(existsUserFind.id_rol);
        
    })
}
