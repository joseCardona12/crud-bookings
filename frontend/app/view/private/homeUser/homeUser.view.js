import {controllerPrivate } from "./homeUser.controller";

export const HomeUserView = () =>{
    const viewPrivate = 
    `<h1>Home User</h1>`;

    return {
        viewPrivate,
        controllerPrivate
    }
}