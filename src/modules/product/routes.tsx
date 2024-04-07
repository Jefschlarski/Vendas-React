import { RouteObject} from "react-router-dom";
import ErrorPage from "../error/screens/errorPage";
import ProductsScreen from "./screens/Products";
import ProductCreateScreen from "./screens/ProductCreate";

export enum ProductRoutesEnum {
    PRODUCTS = '/produtos',
    PRODUCTS_CREATE = '/produtos/criar'
}

export const ProductRoutes: RouteObject[] = [ {
        path: ProductRoutesEnum.PRODUCTS,
        element: <ProductsScreen/>,
        errorElement: <ErrorPage/>
    },
    {
        path: ProductRoutesEnum.PRODUCTS_CREATE,
        element: <ProductCreateScreen/>,
        errorElement: <ErrorPage/>
    }
]