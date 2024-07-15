import Auth from "../../../classes/Auth";
import RegularUser from "../../../classes/RegularUser";
import { NavigateTo } from "../../../Router";

export const controller = () =>{
    const $formLogin = document.getElementById("formLogin");
    $formLogin.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $emailUser = document.getElementById("emailUser");
        const $passwordUser = document.getElementById("passwordUser");
        
        const userRegular = new RegularUser();
        const existsUserFind = userRegular.findExistsUser($emailUser.value, $passwordUser.value); // Verify exists user for email and password
        if(!existsUserFind){
            console.log({message: "User not found"});
            return;
        }
        console.log("Loading...");
        Auth.login(existsUserFind.id_rol,existsUserFind.id_user);
    })
}
