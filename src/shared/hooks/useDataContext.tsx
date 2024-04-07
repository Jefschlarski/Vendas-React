import { createContext, useContext, useState } from 'react';
import { Product } from '../../modules/product/types/Product';


interface DataContext {
  products?: Product[];
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
  
  return {
    products: data.products || [],
    setProducts
  };
};