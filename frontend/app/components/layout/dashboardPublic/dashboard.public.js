export const DashboardPublic = (view,controller) =>{
    const $root = document.getElementById("root");
    $root.innerHTML = 
    `
        <header></header>
        <main>${view}</main>
        <footer></footer>
    `;
    controller();
}