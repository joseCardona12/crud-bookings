import { DashboardPrivate } from "./components/layout/dashboardPrivate/dashboard.private";
import { DashboardPublic } from "./components/layout/dashboardPublic/dashboard.public";
import { routes } from "./routes";

export const Router = () =>{
    const path = window.location.pathname; 
    const publicRoute = routes.public.find(route=>route.path === path);
    const privateRoute = routes.private.find(route=>route.path === path);

    if(path === "/login" || path === "/register"){
        if(localStorage.getItem("token") && localStorage.getItem("id_rol") === "1"){
            NavigateTo("/home-dashboard-user");
            return;
        }
        if(localStorage.getItem("token") && localStorage.getItem("id_rol") === "2"){
            NavigateTo("/home-dashboard-admin");
            return;
        }
    }
    if(path === "/home-dashboard-admin" || path === "/home-dashboard-admin/addUser-view" ||
        path === "/home-dashboard-admin/editUser-view" || path === "/home-dashboard-admin/bookings" || 
        path === "/home-dashboard-admin/bookings/editBooking" && localStorage.getItem("id_rol") === "1"){
            NavigateTo("/home-dashboard-user");
            return;
        }

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