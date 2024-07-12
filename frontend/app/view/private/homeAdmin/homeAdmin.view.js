import { controllerPrivate } from "./homeAdmin.controller"

export const HomeAdminView = () =>{
    const viewPrivate = 
    `<h1>Home admin</h1>`

    return {
        viewPrivate,
        controllerPrivate
    }
}