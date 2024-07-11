import { Router } from "./Router";

export const App = () =>{
    const $root = document.getElementById("root");
    if(!$root){
        console.log({message: "Error. Element root not found"});
        return;
    }
    Router();
}