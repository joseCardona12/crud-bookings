export const DashboardPrivate = (viewPrivate, controllerPrivate) =>{
    const $root = document.getElementById("root");
    $root.innerHTML = 
    `
        <header></header>
        <main>${viewPrivate}</main>
        <footer></footer>
    `;
    controllerPrivate();
}