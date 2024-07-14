import { controllerPrivate } from "./addUser.controller";

export const AddUserView = () =>{
    const viewPrivate = 
    `
    <form action="form" id="formAddUser">
        <h2 class="form-title">Add User</h2>
        <div class="form-name">
            <label class="name-label form-label" for="name">Name:</label>
            <input class="name-input form-control" id="nameUser" type="text" name="name">
        </div>
        <div class="form-email">
            <label class="email form-label" for="email">Email:</label>
            <input class="email-input form-control" id="emailUser" type="email" name="email">
        </div>
        <div class="form-password">
            <label class="password-label form-label" for="password">Password:</label>
            <input class="password-input form-control" id="passwordUser" type="password">
        </div>
        <select class="form-select mt-2" id="selectUser">
            <option selected value="1">regularUser</option>
            <option value="2">Admin</option>
        </select>
        <input class="form-button btn btn-primary mt-2" type="submit" value="Add">
    </form>
    
    `;

    return {
        viewPrivate,
        controllerPrivate
    }
}