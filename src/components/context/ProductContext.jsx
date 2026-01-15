import { createContext, useContext, useState } from "react";
import { products } from "../../data/productsData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList] = useState(products);

  return (
    <ProductContext.Provider value={{ products: productList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);