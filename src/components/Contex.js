import React, { useState, createContext, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetail, setDetailProduct] = useState(detailProduct);
  const [cartItem, setCartItem] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };
  const addToCart = (id) => {
    let temProducts = [...products];
    const index = temProducts.indexOf(getItem(id));
    const temproduct = temProducts[index];
    temproduct.inCart = true;
    temproduct.count = 1;
    const price = temproduct.price;
    temproduct.total = price;
    setProducts(temProducts);
    setCartItem((prevState) => [...prevState, temproduct]);
  };
  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  const fetchProducts = (items) => {
    let products = [];
    items.map((item) => products.push({ ...item }));
    return products;
  };
  useEffect(() => {
    let products = fetchProducts(storeProducts);
    setProducts(products);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        productDetail,
        addToCart,
        handleDetail,
        openModal,
        closeModal,
        modalOpen,
        modalProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
export function useProductState() {
  const productState = useContext(ProductContext);
  // const [products, setProducts] = useContext(ProductContext);
  return {
    ...productState,
    //setProducts,
  };
}
