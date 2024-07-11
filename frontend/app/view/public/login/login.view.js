import { controller } from "./login.controller";

export const LoginView = () =>{
    const view = 
    `
    <form action="form" id="formLogin">
        <h2 class="form-title">Login</h2>
        <div class="form-email">
            <label class="email-label form-label" for="email">Email:</label>
            <input class="email-input form-control" id="emailUser" type="email" name="email">
        </div>
        <div class="form-password">
            <label class="password-label form-label" for="password">Password:</label>
            <input class="password-input form-control" id="passwordUser" type="password">
        </div>
        <input class="form-button btn btn-primary mt-2" type="submit" value="Login">
        <a href="register">Register</a>
    </form>
    `;

    return {
        view,
        controller
    }
}