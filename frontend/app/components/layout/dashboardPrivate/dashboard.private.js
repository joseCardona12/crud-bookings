import { Navbar } from "../navbar/navbar";


export const DashboardPrivate = (viewPrivate, controllerPrivate) =>{
    const {viewNavbar,logicNavbar} = Navbar();
    const $root = document.getElementById("root");
    $root.innerHTML = 
    `
        <header>${viewNavbar}</header>
        <main>${viewPrivate}</main>
        <footer></footer>
    `;
    logicNavbar();
    controllerPrivate();
}