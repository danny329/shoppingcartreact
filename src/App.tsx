import './App.css';
import ProductList from './Components/ProductList/ProductList';
import { CartList } from './Components/CartList/CartList';
import { useState } from 'react';
import React from 'react';
import { AppBar, Badge, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
export type CartItemTypes = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    quantity: number
}
export type contextType = {
    cartItems: CartItemTypes[],
    addToCart: (item: CartItemTypes) => void,
    removeFromCart: (id: number) => void,
    decreaseQuantity: (id: number) => void,
    increaseQuantity: (id: number) => void,
    setcartToggle: React.Dispatch<React.SetStateAction<boolean>>
}
export const MyContext = React.createContext({} as contextType);

function App() {
    const [cartToggle, setcartToggle] = useState(false);
    const [cartItems, setcartItems] = useState<CartItemTypes[]>([]);

    const getTotalItem = (items: CartItemTypes[]): number => items.reduce((ack, item) => ack + item.price, 0);

    const getTotalCount = (items: CartItemTypes[]): number => items.length

    const addToCart = (item: CartItemTypes) => {
        setcartItems([...cartItems, item])
    }

    const removeFromCart = (id: number) => {
        setcartItems(cartItems.filter(e => e.id !== id));
    };

    const increaseQuantity = (id: number) => {
        setcartItems(cartItems.map(e => e.id === id ? { ...e, quantity: e.quantity + 1 } : e));
    };
    const decreaseQuantity = (id: number) => {
        let newcartlist = cartItems.map(e => {
            if(e.id === id ) return { ...e, quantity: e.quantity - 1 }                            
            else return e
        });
        newcartlist = newcartlist.filter(e=>e.quantity > 0);
        setcartItems(newcartlist);

    };

    return (
        <MyContext.Provider value={{ cartItems: cartItems, setcartToggle: setcartToggle, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, addToCart: addToCart, removeFromCart: removeFromCart }} >
            <Drawer anchor="right" open={cartToggle} onClose={() => setcartToggle(false)} sx={{ width: '400px', overflow: 'hidden' }}>
                <CartList />
            </Drawer>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        Shopping Cart React
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Badge badgeContent={getTotalCount(cartItems)} color="error" >
                            <ShoppingCartOutlinedIcon onClick={() => setcartToggle(true)}></ShoppingCartOutlinedIcon>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <ProductList />
        </MyContext.Provider>
    );
}

export default App;
