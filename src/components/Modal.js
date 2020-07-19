import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductState } from "./Contex";
import { ButtonContainer } from "./Button";

function Modal() {
  const { modalOpen, closeModal, modalProduct } = useProductState();
  const { img, title, price } = modalProduct;
  return (
    <div>
      {modalOpen ? (
        <ModalContainer>
          <div className="container">
            <div className="row">
              <div
                id="modal"
                className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-3"
              >
                Item added to the cart
                <img src={img} alt="product" className="img-fluid" />
                <h5>{title}</h5>
                <h5 className="text-muted">price : Ghs {price}</h5>
                <Link to="/">
                  <ButtonContainer onClick={() => closeModal()}>
                    store
                  </ButtonContainer>
                </Link>
                <Link to="/cart">
                  <ButtonContainer cart onClick={() => closeModal()}>
                    go to cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          </div>
        </ModalContainer>
      ) : null}
    </div>
  );
}
export default Modal;
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
