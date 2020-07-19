import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useProductState } from "./Contex";
function ProductList() {
  const { products } = useProductState();

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            {products.map((product) => {
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
