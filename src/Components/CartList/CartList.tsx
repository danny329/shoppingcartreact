import * as React from 'react';
import "./CartList.css";
export interface ICartListProps {
    cart_toggle():any
}

export default function CartList (props: ICartListProps) {
  return (
    <div className="cart_list_wrapper">
      cart list
      <button onClick={props.cart_toggle}>close cart</button>
    </div>
  );
}
