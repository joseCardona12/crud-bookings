import { decryptData } from "../../../helpers/encrypt";

export const controller = () =>{
    const $formLogin = document.getElementById("formLogin");
    $formLogin.addEventListener("submit", (e)=>{
        e.preventDefault();
        const $nameUser = document.getElementById("nameUser");
        const $passwordUser = document.getElementById("passwordUser");
        
        const usersGet = getUsers();
        verifyExistsUser($nameUser.value, $passwordUser.value, usersGet);
    })
}

const getUsers = () =>{
    const usersGet = localStorage.getItem("users");
    return usersGet;
}

const verifyExistsUser = (nameUser,passwordUser,users) =>{
    const usersConvert = JSON.parse(users);
    const existsUser = usersConvert.find(user=>user.name === nameUser && decryptData(user.password) === passwordUser);
    console.log(existsUser)
}