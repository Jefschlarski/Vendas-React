import { RouteObject} from "react-router-dom";
import LoginScreen from "./screens/loginScreen";
import ErrorPage from "../error/screens/errorPage";

export enum LoginRoutesEnum {
    LOGIN = '/login'
}

export const loginRoutes: RouteObject[] = [ {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen/>,
    errorElement: <ErrorPage/>
} ]