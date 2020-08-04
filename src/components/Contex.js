import React, { useState, createContext, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetail, setDetailProduct] = useState(detailProduct);
  const [cartItem, setCartItem] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cart, setCart] = useState({
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0,
  });

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
  const pickProduct = (id) => {
    const temCart = [...cartItem];
    let selectedProduct = temCart.find((item) => item.id === id);
    let index = temCart.indexOf(selectedProduct);
    let product = temCart[index];
    return [product, temCart];
  };
  const increment = (id) => {
    const [product, cart] = pickProduct(id);
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCartItem([...cart]);
  };
  const decrement = (id) => {
    const [product, cart] = pickProduct(id);
    product.count = product.count - 1;
    if (product.count === 0) return removeItem(id);
    product.total = product.count * product.price;
    setCartItem([...cart]);
  };
  const removeItem = (id) => {
    const temProducts = [...products];
    let temCart = [...cartItem];
    temCart = temCart.filter((item) => item.id !== id);
    const index = temProducts.indexOf(getItem(id));
    let removedProduct = temProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setProducts([...temProducts]);
    setCartItem([...temCart]);
  };
  const clearCart = () => {
    setCartItem([]);
    let products = fetchProducts(storeProducts);
    setProducts(products);
  };
  const addTotals = () => {
    let subtotal = 0;
    cartItem.map((item) => (subtotal += item.total));
    const temTax = subtotal * 0.1;
    const tax = parseFloat(temTax.toFixed(2));
    const total = subtotal + tax;
    setCart({ cartSubtotal: subtotal, cartTax: tax, cartTotal: total });
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

  useEffect(addTotals, [cartItem]);

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
        cartItem,
        cart,
        increment,
        decrement,
        removeItem,
        clearCart,
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
