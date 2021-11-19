import * as React from 'react';
import { useContext } from 'react';
import {CartItemTypes, MyContext} from '../../App';

export interface Props {
  item : CartItemTypes
}

export const Cart: React.FC<Props> = ({item}) => {
  const {addToCart, decreaseQuantity, removeFromCart} = useContext(MyContext);
  return (
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>{item.price}</p>
        <p>{item.price * item.quantity}</p>
      </div>
      <div>
        <button onClick={()=>addToCart(item)}>+</button>
        <button onClick={()=>decreaseQuantity(item.id)}>-</button>
        <button onClick={()=>removeFromCart(item.id)}>delete</button>
      </div>
      <img src={item.image}/>
    </div>
  );
}
