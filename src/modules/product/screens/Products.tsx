import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequest } from "../../../shared/hooks/useRequests";
import { PRODUCT_URL } from "../../../shared/constants/urls";
import { Methods } from "../../../shared/enums/methods";
import { Product } from "../types/Product";
import { TableProps, Tag} from "antd";
import Table from "../../../shared/components/table/Table";
import TooltipImage from "../components/TooltipImage";
import { convertNumberToPrice } from "../../../shared/utils/converter";
import Layout from "../../../shared/components/layouts/layout";
import Button from "../../../shared/components/buttons/button/button";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import Header from "../../../shared/components/header/header";
import {
  PlusOutlined
} from '@ant-design/icons';

const columns: TableProps<Product>['columns'] = [
  { 
    title: 'Id',
    dataIndex: 'id',
    key: 'id',

  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render: (category) =>  <Tag color={category.categoryColor.toString()}> {category.name} </Tag>,

  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
    render: (price) => convertNumberToPrice(price),
  },
];


const ProductsScreen = () => {
    const { products, setProducts } = useDataContext();
    const { request} = useRequest();
    const navigate = useNavigate();

    useEffect(() => {
        request<Product[]>(PRODUCT_URL, Methods.GET, setProducts);
    }, [])

  const handleCreate = () => {
        navigate(ProductRoutesEnum.PRODUCTS_CREATE);
    }
  
    return (
      <Layout breadcrumbItems={
        [
          {
            name: "home",
            url: "/"
          },
          {
            name: "produtos"
          }
        ]
      }> 
        <Header title="Produtos" toolBar={<Button icon={<PlusOutlined />} title="Adicionar" onClick={handleCreate} />}/>
        <Table columns={columns} dataSource={products} />
      </Layout>
    )
}

export default ProductsScreen