import { RouteObject} from "react-router-dom";
import LoginScreen from "./screens/loginScreen";

export const loginRoutes: RouteObject[] = [ {
    path: '/login',
    element: <LoginScreen/>
} ]