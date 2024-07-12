import { Navbar } from "../navbar/navbar";
import styles from "./dashboard.private.styles.css";
export const DashboardPrivate = (viewPrivate, controllerPrivate) =>{
    const navbarData = [
        {href:"/home-dashboard-user", name: "Home"},
        {href:"/login", name: "Logout"}
    ]
    const {viewNavbar,navbarController} = Navbar(navbarData);
    const $root = document.getElementById("root");
    $root.innerHTML = 
    `
        <header class="${styles["header"]}">${viewNavbar}</header>
        <main>${viewPrivate}</main>
        <footer></footer>
    `;
    navbarController();
    controllerPrivate();
}