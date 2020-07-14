import React, { useState, createContext, useContext } from "react";
import { storeProducts } from "../data";

const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState(storeProducts);
  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}
export function useProductState() {
  const [products] = useContext(ProductContext);
  // const [products, setProducts] = useContext(ProductContext);
  return {
    ...products,
  };
}
