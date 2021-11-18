import { useContext } from "react";
import "../../styles/CartList.css";
import { Cart } from '../Cart/Cart';
import {MyContext} from '../../App';


export function CartList() {
  const {cartItems} = useContext(MyContext);

    return (
        <div className="cart_list_wrapper">
            <div className="cartlistheader">
                <p>Your Shopping Cart</p>
            </div>
            {
                cartItems?
                <div className="cartswrapper">
                    {cartItems.map(e => <Cart item={e} />)}
                </div>                
                :
                <div>"Cart list is empty"</div>
            }
        </div>
    );
}

