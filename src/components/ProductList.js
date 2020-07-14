import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { useProductState } from "./Contex";
function ProductList() {
  // const [products, setProducts] = useContext(ProductContext);
  // console.log(products);
  const state = useProductState();
  console.log(state);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row"></div>
        </div>
      </div>
      {/* <Product />  */}
    </>
  );
}

export default ProductList;
