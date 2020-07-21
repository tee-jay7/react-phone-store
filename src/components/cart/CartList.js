import React from "react";
import CartItem from "./CartItem";

function CartList({ state }) {
  const { cartItem } = state;
  return (
    <div className="container-fluid">
      {cartItem.map((item) => (
        <CartItem key={item.id} item={item} state={state} />
      ))}
    </div>
  );
}
export default CartList;
