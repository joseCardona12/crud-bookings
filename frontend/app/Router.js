import { DashboardPrivate } from "./components/layout/dashboardPrivate/dashboard.private";
import { DashboardPublic } from "./components/layout/dashboardPublic/dashboard.public";
import { routes } from "./routes";

export const Router = () =>{
    const path = window.location.pathname; 
    const publicRoute = routes.public.find(route=>route.path === path);
    const privateRoute = routes.private.find(route=>route.path === path);

    if(path === "/"){
        NavigateTo("/login")
        return;
    }
    if(publicRoute){
        const {view,controller} = publicRoute.view();
        DashboardPublic(view,controller);
        return;
    }
    if(privateRoute){
        if(localStorage.getItem("token")){
            const {viewPrivate,controllerPrivate} = privateRoute.view();
            DashboardPrivate(viewPrivate,controllerPrivate);
            return;
        }
        NavigateTo("/login");
    }
}

export const NavigateTo = (path) => {
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}