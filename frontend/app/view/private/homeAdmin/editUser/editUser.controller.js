import { Administrator } from "../../../../classes/Administrator";
import { NavigateTo } from "../../../../Router";

export const controllerPrivate = () =>{
    const idUserParams = Administrator.getIdUserParams();
    const administrator = new Administrator();
    const userForIdSearch = administrator.searchUserForId(idUserParams);
    const $nameUser = document.getElementById("nameUser");
    const $emailUser = document.getElementById("emailUser");
    const $passwordUser = document.getElementById("passwordUser");
    const $selectUser = document.getElementById("selectUser");
    const $forUpdate = document.getElementById("formUpdate");

    if(!userForIdSearch){
        console.log({message: "User not found"});
        return;
    }

    administrator.loadDataUser(userForIdSearch,$nameUser, $emailUser, $passwordUser);
    $forUpdate.addEventListener("submit", (e)=>{
        e.preventDefault();
        administrator.updateUser(
            userForIdSearch, 
            $nameUser.value, 
            $emailUser.value, 
            $passwordUser.value, 
            $selectUser.value
        );
        console.log({message: "Updated user correctly"})
        NavigateTo("/home-dashboard-admin");
        
    })

    
}


