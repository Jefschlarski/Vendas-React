import { RouteObject} from "react-router-dom";
import SplashScreen from "./screens/splashScreen";
import ErrorPage from "../error/screens/errorPage";

export enum SplashRoutesEnum {
    SPLASH = '/'
}

export const splashRoutes: RouteObject[] = [ {
    path: SplashRoutesEnum.SPLASH,
    element: <SplashScreen/>,
    errorElement: <ErrorPage/>
} ]