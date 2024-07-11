import { NavigateTo } from "../Router";

class Auth{
    static login(id_rol){
        const token = Auth.generateToken();
        localStorage.setItem("token", token);
        localStorage.setItem("id_rol", id_rol);
        NavigateTo("/home-dashboard-user");
    }
    static generateToken(){
        return Math.random().toString(36).substring(2);
    }
    static verifyForm(...fields){
        return fields.every(field=>field)
    }
}

export default Auth;