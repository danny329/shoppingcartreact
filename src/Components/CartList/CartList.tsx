import { useContext } from "react";
import "../../styles/CartList.css";
import { Cart } from '../Cart/Cart';
import {MyContext} from '../../App';
import { IconButton, List, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export function CartList() {
  const {cartItems, setcartToggle, getGrandTotal} = useContext(MyContext);

    return (
        <div style={{width:'300px'}}>
            <List sx={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px', backgroundColor:'#0be4f6'}} >
                <Typography variant="button" > Your Shopping Cart</Typography>
                <IconButton aria-label="Close" size="small" onClick={()=>setcartToggle(false)}>
                    <CloseIcon ></CloseIcon>
                </IconButton>
            </List>
            <List>
            {
                (cartItems && cartItems.length)?
                cartItems.map(e => <Cart item={e} key={e.id}/>)
                :
                <Typography variant="body1" sx={{textAlign:'center', margin:'auto'}}>Cart list is Empty!</Typography>
            } 
            </List>
            <List sx={{display:'flex', justifyContent:'space-between', position:'fixed', bottom:'0px', padding:'8px', backgroundColor:'#0be4f6', width:'285px'}}>
                <Typography variant="subtitle2">
                    Grand Total:
                </Typography>
                <Typography variant="subtitle2">
                    {getGrandTotal(cartItems).toFixed(2)}
                </Typography>
            </List>
        </div>
    );
}

