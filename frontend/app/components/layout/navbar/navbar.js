import { navbarController } from "./navbar.controller";
import styles from "./navbar.styles.css";

export const Navbar = (navbarData = []) =>{
    const viewNavbar = 
    `
    <div class="${styles["header-title"]}">
        <h4 class="${styles["title"]}">Dashboard Home user</h4>
    </div>
    <nav class="${styles["header-nav"]}">
        <ul class="${styles["nav-list"]}">
            ${navbarData.map(data=>
                `
                    <li class="${styles["list-item"]}">
                        <button class="${styles["item-button"]} btn btn-primary" data-href="${data.href}">${data.name}</button>
                    </li>
                `
            ).join("")}
        </ul>
    </nav>    
    `

    return {
        viewNavbar,
        navbarController
    }

}