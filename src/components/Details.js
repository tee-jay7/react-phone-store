import React from "react";
import { Link } from "react-router-dom";
import { useProductState } from "./Contex";
import { ButtonContainer } from "./Button";

function Details() {
  const { productDetail, addToCart, openModal, closeModal } = useProductState();
  const { id, title, company, img, info, price, inCart } = productDetail;
  return (
    <div className="container py-5">
      {/* title */}
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      {/* end of title */}
      <div className="row">
        {/* Product info */}
        <div className="col-10 mx-auto col-md-6 my-3 ">
          <img src={img} alt="phone" className="image-fluid" />
        </div>
        {/* product text */}
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h3>model: {title}</h3>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by: <span>{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price: <span>Ghs</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            product info
          </p>
          <p className="text-muted">{info}</p>
        </div>
        {/* Buttons */}
        <div>
          <Link to="/">
            <ButtonContainer>products</ButtonContainer>
          </Link>
          <ButtonContainer
            cart
            onClick={() => {
              addToCart(id);
              openModal(id);
            }}
            disabled={inCart ? true : false}
          >
            {inCart ? "in cart" : "add to cart"}
          </ButtonContainer>
        </div>
      </div>
    </div>
  );
}

export default Details;
