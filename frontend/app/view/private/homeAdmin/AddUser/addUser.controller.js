import Auth from "../../../../classes/Auth";
import RegularUser from "../../../../classes/RegularUser";
import { NavigateTo } from "../../../../Router";

export const controllerPrivate = () =>{

    //Get form html
    const $formAddUser = document.getElementById("formAddUser");
    $formAddUser.addEventListener("submit", (e)=>{ // Add event listener to form
        e.preventDefault();
        const $nameUser = document.getElementById("nameUser");
        const $emailUser = document.getElementById("emailUser");
        const $passwordUser = document.getElementById("passwordUser");
        const $selectUser = document.getElementById("selectUser");

        const formVerify = Auth.verifyForm($nameUser.value, $emailUser.value, $passwordUser.value);
        if(!formVerify){
            console.log({message: "Fill all fields. Please"});
            return;
        }

        const regularUser = new RegularUser($nameUser.value, $emailUser.value, $passwordUser.value);
        const existsUserFind = regularUser.findExistsUser($emailUser.value, $passwordUser.value);
        if(!existsUserFind){
            regularUser.register($selectUser.value);
            console.log({message: "User Add correctly"})
            NavigateTo("/home-dashboard-admin");
            return;
        }
        console.log({message: "Registered user. Try again"})
    })
}