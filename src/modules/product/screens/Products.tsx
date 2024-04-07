import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequest } from "../../../shared/hooks/useRequests";
import { PRODUCT_URL } from "../../../shared/constants/urls";
import { Methods } from "../../../shared/enums/methods";
import { Product } from "../types/Product";

const ProductsScreen = () => {
    const { products, setProducts } = useDataContext();
    const { request} = useRequest();

    useEffect(() => {
        request<Product[]>(PRODUCT_URL, Methods.GET, setProducts);
    })


    if (products) {
        return (
            <div>
                <h1>Produtos</h1>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProductsScreen