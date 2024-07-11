import RegularUser from "../../../classes/RegularUser";
import { verifyForm } from "../../../helpers/verifyForm";
import { NavigateTo } from "../../../Router";

export const controller = () =>{
    const $formRegisterUser = document.getElementById("formRegister");
    $formRegisterUser.addEventListener("submit", (e)=>{
        e.preventDefault(); // Avoid submit for default
        const $nameUserRegular = document.getElementById("nameUser"); 
        const $emailUserRegular = document.getElementById("emailUser"); 
        const $passwordUserRegular = document.getElementById("passwordUser"); 

        const formVerify = verifyForm($nameUserRegular.value, $emailUserRegular.value, $passwordUserRegular.value);
        if(!formVerify){
            console.log({message: "Please, Fill all fields"});
            return;
        }
        const userRegular = new RegularUser($nameUserRegular.value,$emailUserRegular.value, $passwordUserRegular.value);
        userRegular.register();
        NavigateTo("/login");
    })  
}