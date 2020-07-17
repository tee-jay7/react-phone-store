import React, { useState, createContext, useContext } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState(storeProducts);
  const [productDetail, setDetailProduct] = useState(detailProduct);
  const handleDetail = () => {
    console.log("Hello from handle detail");
  };
  const addToCart = () => {
    console.log("Hello from add to cart");
  };
  return (
    <ProductContext.Provider
      value={{ products, setProducts, productDetail, addToCart, handleDetail }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
export function useProductState() {
  const products = useContext(ProductContext);
  // const [products, setProducts] = useContext(ProductContext);
  return {
    ...products,
    //setProducts,
  };
}
