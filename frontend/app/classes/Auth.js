import { encryptData } from "../helpers/encrypt";

class Auth{
    static login(id_rol,id_user){
        const token = Auth.generateToken();
        localStorage.setItem("token", token);
        localStorage.setItem("id_rol", id_rol);
        localStorage.setItem("id_user", encryptData(id_user))
    }
    static generateToken(){
        return Math.random().toString(36).substring(2);
    }
    static verifyForm(...fields){
        return fields.every(field=>field)
    }
}

export default Auth;