import { createContext, useContext, useState } from 'react';
import { Product } from '../../modules/product/types/Product';
import { CategoryList } from '../../modules/category/types/CategoryList';

interface DataContext {
  products?: Product[];
  categories?: CategoryList;
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}
const DataContext = createContext({} as DataContextProps);
interface DataProviderProps {
  children: React.ReactNode;
}
export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({});
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export const useDataContext = () => {
  
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: Product[]) => {
    setData({
      ...data,
      products,
    });
  };

  const setCategories = (categories: CategoryList) => {
    setData({
      ...data,
      categories,
    });
  };
  
  return {
    products: data.products || [],
    categories: data.categories,
    setProducts,
    setCategories
  };
};