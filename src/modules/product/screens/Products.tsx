import { useEffect, useState } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequest } from "../../../shared/hooks/useRequests";
import { PRODUCT_URL } from "../../../shared/constants/urls";
import { Methods } from "../../../shared/enums/methods";
import { Product } from "../types/Product";
import { TableProps, Tag} from "antd";
import Table from "../../../shared/components/table/Table";
import TooltipImage from "../components/TooltipImage";
import { convertNumberToPrice, normalize } from "../../../shared/utils/converter";
import Layout from "../../../shared/components/layouts/layout";
import Button from "../../../shared/components/buttons/button/button";
import { useNavigate } from "react-router-dom";
import { ProductRoutesEnum } from "../routes";
import Header from "../../../shared/components/header/header";
import {
  PlusOutlined
} from '@ant-design/icons';
import SearchComponent from "../../../shared/components/search/search";

const breadcrumbItems = [
  { 
    key: "home",
    title: "home",
    href: "/"
  },
  {
    key: "produtos",
    title: "produtos"
  }
]

const columns: TableProps<Product>['columns'] = [
  { 
    title: 'Id',
    dataIndex: 'id',
    key: 'key',
    sorter: (a, b) => a.id - b.id,
    showSorterTooltip: false
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'key',
    sorter: (a, b) => a.name.localeCompare(b.name),
    showSorterTooltip: false,
    render: (_, product) => <TooltipImage product={product} />,
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'key',
    sorter: (a, b) => a.category.name.localeCompare(b.category.name),
    showSorterTooltip: false,
    render: (category) =>  <Tag color={category.categoryColor.toString()}> {category.name} </Tag>,

  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'key',
    sorter: (a, b) => a.price - b.price,
    showSorterTooltip: false,
    render: (price) => convertNumberToPrice(price),
  },
];

const addKeyInProductList = (products: Product[]): Product[] => {
  return products.map((product, index) => ({
    ...product,
    key: index,
  }));
}

const ProductsScreen = () => {
    const { products, setProducts } = useDataContext();
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { request} = useRequest();
    const navigate = useNavigate();

    useEffect(() => {
      setFilteredProducts(products);
    },[products])

    useEffect(() => {
        request<Product[]>(PRODUCT_URL, Methods.GET, setProducts);
    }, [])

  const handleCreate = () => {
        navigate(ProductRoutesEnum.PRODUCTS_CREATE);
    }
    
    const onSearch = (value: string) => {
      const normalizedValue = normalize(value).toLowerCase();
      setFilteredProducts(
        products.filter(
          (product) =>
            normalize(product.name).toLowerCase().includes(normalizedValue)
        )
      );
    };

    return (
      <Layout breadcrumbItems={breadcrumbItems}> 
        <Header title="Produtos" toolBar={<div><SearchComponent placeholder="Pesquisar" onSearch={onSearch}/><Button icon={<PlusOutlined />} title="Adicionar" onClick={handleCreate}/></div>}/>
        <Table columns={columns} dataSource={addKeyInProductList(filteredProducts)} />
      </Layout>
    )
}

export default ProductsScreen