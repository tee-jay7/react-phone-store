import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useProductState } from "./Contex";
function ProductList() {
  const state = useProductState();

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {state.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
      {/* <Product />  */}
    </>
  );
}

export default ProductList;
