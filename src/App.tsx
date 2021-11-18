import './App.css';
import ProductList from './Components/ProductList/ProductList';
import { CartList } from './Components/CartList/CartList';
import { useState } from 'react';
import { Badge, Drawer } from '@material-ui/core';
import React from 'react';

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
  cartItems : CartItemTypes[],
  addToCart: (item: CartItemTypes) => void ,
  removeFromCart : (id: number)=>void ,
  increaseQuantity : (id: number)=>void ,
  decreaseQuantity : (id: number)=>void ,
}
export const MyContext = React.createContext({} as contextType);

function App() {
  const [cartToggle, setcartToggle] = useState(false);
  const [cartItems, setcartItems] = useState<CartItemTypes[]>([]);

  const getTotalItem = (items: CartItemTypes[]): number => items.reduce((ack, item) => ack + item.price, 0);
  
  const addToCart = (item: CartItemTypes) => {
    setcartItems([...cartItems, item])
  };
  const removeFromCart = (id:number) => {
    setcartItems(cartItems.filter(e=>e.id!=id));
  };
  const increaseQuantity =(id:number) => {
    let item = cartItems.find(e=>e.id === id);

  };
  const decreaseQuantity =(id:number) => null;

  return (
    <MyContext.Provider value={{ cartItems:cartItems, increaseQuantity: increaseQuantity, decreaseQuantity: decreaseQuantity, addToCart:addToCart, removeFromCart: removeFromCart}} >
      <div className="App">
        <Drawer anchor="right" open={cartToggle} onClose={() => setcartToggle(false)}>
          <CartList />
        </Drawer>
        <div className="header_nav">
          <h5>Shopping Cart React</h5>
          <Badge badgeContent={getTotalItem(cartItems)} color="error">
            <button onClick={() => setcartToggle(true)}>Cart</button>
          </Badge>
        </div>
        <ProductList />
      </div>
    </MyContext.Provider>
  );
}

export default App;
