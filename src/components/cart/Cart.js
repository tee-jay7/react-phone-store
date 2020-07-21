import React from "react";
import Title from "../Title";
import { useProductState } from "../Contex";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

function Cart() {
  const state = useProductState();
  const { cartItem } = state;
  return (
    <section>
      {cartItem.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList state={state} />
          <CartTotals state={state} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}

export default Cart;
