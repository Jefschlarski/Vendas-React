import Header from "../../../shared/components/header/header"
import Layout from "../../../shared/components/layouts/layout"
import { ProductRoutesEnum } from "../routes"

export const ProductCreateScreen = () => {

    return (
        <Layout breadcrumbItems={
            [
              {
                name: "home",
                url: "/"
              },
              {
                name: "produtos",
                url: ProductRoutesEnum.PRODUCTS
              },
              {
                name: "criar"
              }
            ]
          }> 
        <Header title="Criar Produto"/>
        </Layout> 
    )
}

export default ProductCreateScreen