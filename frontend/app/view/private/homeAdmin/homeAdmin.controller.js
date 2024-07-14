import { Administrator } from "../../../classes/Administrator";
import { encryptData } from "../../../helpers/encrypt";
import { NavigateTo } from "../../../Router";
import styles from "./homeAdmin.styles.css";

export const controllerPrivate = () =>{
    const $contentBodyTable = document.getElementById("bodyContent");
    const $counUsers = document.getElementById("countUsers");
    const $searchUsers = document.getElementById("searchUsers");
    const $buttons = document.querySelectorAll(`.${styles["users-rigth"]} button`);
    const administrator = new Administrator();
    administrator.renderUsers($contentBodyTable);

    const $rowTable = document.querySelectorAll("[data-event]");
    let selected = false;
    let $selectedElement;

    $rowTable.forEach((row) =>{
        row.addEventListener("click", ()=>{
            selected = true;
            if(selected){
                row.classList.toggle(`${styles["element-selected"]}`);
                $selectedElement = row;
                return;       
            }
            
        })
    })
    
    $buttons.forEach((button,index)=>{
        button.addEventListener("click", ()=>{
            if(index === 0){
                NavigateTo(`/home-dashboard-admin/addUser-view`);
                return;
            }

            if(!$selectedElement){
                console.log({message: "Select a user. Please"});
                return;
            }
            const getAtributeId = $selectedElement.getAttribute("data-event");
            
            if(index === 1){
                NavigateTo(`/home-dashboard-admin/editUser-view?user=${encryptData(getAtributeId)}`);
                return;
            }
            if(index === 2){
                const confirmDeleteUser = confirm("Do you want delete the user?");
                if(!confirmDeleteUser){
                    return;
                }
                administrator.deleteUser(getAtributeId);
                NavigateTo("/home-dashboard-admin");
            }
        })
    })
    
    //Change count users - render count 
    administrator.renderCountUsersLegth($counUsers);  


    // Html element input - search
    $searchUsers.addEventListener("input", ()=>{
        console.log($searchUsers.value)
    })
    
    // $counUsers.
}