import { controller } from "./register.controller";

export const RegisterView = () =>{
    const view = 
    `
    <form action="form" id="formRegister">
        <h2 class="form-title">Register</h2>
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
        <input class="form-button btn btn-primary mt-2" type="submit" value="Register">
        <a href="login">Login</a>
    </form>
    
    `;

    return {
        view,
        controller
    }
}