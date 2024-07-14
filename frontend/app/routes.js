
import { HomeUserView } from "./view/private/homeUser/homeUser.view";
import { HomeAdminView} from "./view/private/homeAdmin/homeAdmin.view";
import { LoginView } from "./view/public/login/login.view";
import { RegisterView } from "./view/public/register/register.view";
import { AddUserView } from "./view/private/homeAdmin/AddUser/addUser.view";
import { EditUserView } from "./view/private/homeAdmin/editUser/editUser.view";

export const routes = {
    public: [
        {path: "/login", view: LoginView},
        {path: "/register", view: RegisterView}
    ],
    private: [
        {path: "/home-dashboard-user", view: HomeUserView},
        {path: "/home-dashboard-admin", view: HomeAdminView},
        {path: "/home-dashboard-admin/addUser-view", view: AddUserView},
        {path: "/home-dashboard-admin/editUser-view", view: EditUserView}
    ]
}