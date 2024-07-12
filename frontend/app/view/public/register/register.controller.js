import { Administrator } from "../../../classes/Administrator";
import Auth from "../../../classes/Auth";
import RegularUser from "../../../classes/RegularUser";
import { NavigateTo } from "../../../Router";

export const controller = () =>{
    const $formRegisterUser = document.getElementById("formRegister");
    $formRegisterUser.addEventListener("submit", (e)=>{
        e.preventDefault(); // Avoid submit for default
        const $nameUserRegular = document.getElementById("nameUser"); 
        const $emailUserRegular = document.getElementById("emailUser"); 
        const $passwordUserRegular = document.getElementById("passwordUser"); 

        const formVerify = Auth.verifyForm($nameUserRegular.value, $emailUserRegular.value, $passwordUserRegular.value)   
        if(!formVerify){
            console.log({message: "Please, Fill all fields"});
            return;
        }
        const userRegular = new RegularUser($nameUserRegular.value,$emailUserRegular.value, $passwordUserRegular.value);
        const existsUserFind = userRegular.findExistsUser($emailUserRegular.value,$passwordUserRegular.value);

        if(!existsUserFind){
            userRegular.register();
            console.log({message: "Registered user correctly"})
            NavigateTo("/login");
            return;
        }
        console.log({message: "Error. Registered user"})
    });
}