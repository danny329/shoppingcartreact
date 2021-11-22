import { useContext } from "react";
import "../../styles/CartList.css";
import { Cart } from '../Cart/Cart';
import {MyContext} from '../../App';
import { List, Typography } from "@mui/material";


export function CartList() {
  const {cartItems} = useContext(MyContext);

    return (
        <>
            <Typography>Your Shopping Cart</Typography>
            <List>
            {
                cartItems?
                cartItems.map(e => <Cart item={e} />)
                :
                <div>"Cart list is empty"</div>
            }
            </List>
        </>
    );
}

