export const Navbar = () =>{
    const viewNavbar = 
    `
    <div class="header-title">
        <h4>Dashboard Home user</h4>
    </div>
    <nav class="header-nav">
        <ul class="nav-list">
            <li class="list-item">
                <button class="item-button btn btn-info">Home</button>
            </li>
        </ul>
    </nav>    
    `

    const logicNavbar = () =>{
        
    }
    return {
        viewNavbar,
        logicNavbar
    }

}