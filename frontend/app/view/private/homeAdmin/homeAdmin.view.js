import { controllerPrivate } from "./homeAdmin.controller"
import styles from "./homeAdmin.styles.css";
export const HomeAdminView = () =>{
    const viewPrivate = 
    `
    <section class="${styles["main-section"]}">
        <div class="${styles["section-content-users"]}">
            <div class="${styles["users-top"]}">
                <div class="${styles["top-left"]}">
                    <i class="bi bi-person"></i>
                    <h6>Users:</h6>
                    <span id="countUsers">12</span>
                    <a href="/home-dashboard-admin/bookings">Bookings</a>
                </div>
                <div class="${styles["users-rigth"]}">
                    <input class="${styles["right-input"]}" type="text" id="searchUsers">
                    <button class="${styles["right-button"]} btn btn-info"> 
                        <i class="bi bi-plus-circle"></i> 
                        Add
                    </button>
                    <button class="${styles["right-button"]} btn btn-primary"> 
                        <i class="bi bi-pencil"></i>
                        Update
                    </button>
                    <button class="${styles["right-button"]} btn btn-danger">
                        <i class="bi bi-trash3"></i>
                        Delete
                    </button>
                </div>
            </div>
            <div class="${styles["users-body"]}">
                <table class="${styles["body-table"]}">
                    <thead class="${styles["table-header"]}">
                        <tr>
                            <th>User names</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Rol</th>
                        </tr>
                    </thead>
                    <tbody class="${styles["table-body"]}" id="bodyContent">
                    
                    </tbody>
                
                </table>
            </div>
        </div>
    
    </section>
    
    `

    return {
        viewPrivate,
        controllerPrivate
    }
}