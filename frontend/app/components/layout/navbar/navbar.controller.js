import Auth from "../../../classes/Auth";
import { NavigateTo } from "../../../Router";
import styles from "./navbar.styles.css";
export const navbarController = () =>{
    const $buttonsNavbar = document.querySelectorAll(`.${styles["item-button"]}`);
    $buttonsNavbar.forEach((button)=>{
        button.addEventListener("click",()=>{
            const attributeHref = button.getAttribute("data-href");
            
            if(button.textContent === "Home"){
                if(localStorage.getItem("id_rol") === "1"){
                    NavigateTo(`${attributeHref}`)
                }
            }
            if(button.textContent === "Logout"){
                Auth.logout();
                NavigateTo("/login");
                return;
            }
        })
    })
}