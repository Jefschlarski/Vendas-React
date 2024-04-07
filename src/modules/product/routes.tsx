import { RouteObject} from "react-router-dom";
import ErrorPage from "../error/screens/errorPage";
import ProductsScreen from "./screens/Products";

export enum ProductRoutesEnum {
    PRODUCTS = '/produtos',
}

export const ProductRoutes: RouteObject[] = [ {
    path: ProductRoutesEnum.PRODUCTS,
    element: <ProductsScreen/>,
    errorElement: <ErrorPage/>
} ]