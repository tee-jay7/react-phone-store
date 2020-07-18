import React, { useState, createContext, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetail, setDetailProduct] = useState(detailProduct);
  const handleDetail = () => {
    console.log("Hello from handle detail");
  };
  const addToCart = (id) => {
    console.log(`id ${id} added to cart`);
  };

  const fetchProducts = (items) => {
    let products = [];
    items.map((item) => products.push({ ...item }));
    // console.log(products);
    return products;
  };
  useEffect(() => {
    let products = fetchProducts(storeProducts);
    setProducts(products);
  }, []);
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
