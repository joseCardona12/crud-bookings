import { DashboardPublic } from "./components/layout/dashboardPublic/dashboard.public";
import { routes } from "./routes";

export const Router = () =>{
    const path = window.location.pathname; 
    const publicRoute = routes.public.find(route=>route.path === path);

    if(publicRoute){
        const {view,controller} = publicRoute.view();
        DashboardPublic(view,controller);
    }
}

export const NavigateTo = (path) => {
    window.history.pushState({}, "", window.location.origin + path);
    Router();
}