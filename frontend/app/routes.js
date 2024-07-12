
import { HomeUserView } from "./view/private/homeUser/homeUser.view";
import { HomeAdminView} from "./view/private/homeAdmin/homeAdmin.view";
import { LoginView } from "./view/public/login/login.view";
import { RegisterView } from "./view/public/register/register.view";

export const routes = {
    public: [
        {path: "/login", view: LoginView},
        {path: "/register", view: RegisterView}
    ],
    private: [
        {path: "/home-dashboard-user", view: HomeUserView},
        {path: "/home-dashboard-admin", view: HomeAdminView}
    ]
}