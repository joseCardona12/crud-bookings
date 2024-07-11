class Auth{
    static login(){
        const token = Auth.generateToken();
        localStorage.setItem("token", token);
    }
    static generateToken(){
        return Math.random().toString(36).substring(2);
    }
}

export default Auth;