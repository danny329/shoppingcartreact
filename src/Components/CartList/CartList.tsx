import { useContext } from "react";
import "../../styles/CartList.css";
import { Cart } from '../Cart/Cart';
import {MyContext} from '../../App';
import { List } from "@mui/material";


export function CartList() {
  const {cartItems} = useContext(MyContext);

    return (
        <div className="cart_list_wrapper">
            <div className="cartlistheader">
                <p>Your Shopping Cart</p>
            </div>
            <List>
            {
                cartItems?
                cartItems.map(e => <Cart item={e} />)
                :
                <div>"Cart list is empty"</div>
            }
            </List>
        </div>
    );
}

