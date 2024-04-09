import { useEffect } from "react"
import Header from "../../../shared/components/header/header"
import Layout from "../../../shared/components/layouts/layout"
import { CATEGORY_URL } from "../../../shared/constants/urls"
import { Methods } from "../../../shared/enums/methods"
import { useDataContext } from "../../../shared/hooks/useDataContext"
import { useRequest } from "../../../shared/hooks/useRequests"
import { ProductRoutesEnum } from "../routes"
import { ProductCreateContainer } from "../styles/productCreate.styles"
import TextInput from "../../../shared/components/inputs/textInput/textInput"
import Button from "../../../shared/components/buttons/button/button"
import { Select } from "antd"

const ProductCreateScreen = () => {
  const { categories, setCategories } = useDataContext()
  const { request} = useRequest();

 useEffect(() => {
  if (!categories?.count) {
    request(CATEGORY_URL, Methods.GET, setCategories)
  }
 },[])
  
 console.log(categories)
  const breadcrumbItemList = [
    { 
      key: "home",
      title: "home",
      href: "/"
    },
    {
      key: "produtos",
      title: "produtos",
      href: ProductRoutesEnum.PRODUCTS
    },
    {
      key: "criar",
      title: "criar"
    }
  ]
    return (
        <Layout breadcrumbItems={breadcrumbItemList}> 
        <Header title="Adicionar Novo Produto"/>
        <ProductCreateContainer>
          <TextInput height="40px" title="Nome" placeholder="Nome" />
          <TextInput height="40px" title="Preço" placeholder="Preço" />
          <TextInput height="40px" title="Quantidade" placeholder="Quantidade" />
          <TextInput height="40px" title="Descrição" placeholder="Descrição" />
          <TextInput height="40px" title="Url Imagem" placeholder="Imagem" />
          <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search to Select"
          optionFilterProp="children"
          filterOption={(input, option) => (option?.label ?? '').includes(input)}
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
          }
          options={categories?.categories.map((category) => ({
            value: `${category.id}`,
            label: `${category.name}`,
          }))}
        />
        <Button title="Adicionar" type="primary" />
        </ProductCreateContainer>
        </Layout> 
    )
}

export default ProductCreateScreen