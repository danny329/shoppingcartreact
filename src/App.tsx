import './App.css';
import ProductList from './Components/ProductList/ProductList';
import CartList from './Components/CartList/CartList';
import { useState } from 'react';
function App() {
  const [cartToggle, setcartToggle] = useState(false);

  const cart_toggle = () => {
    setcartToggle(!cartToggle);
  };
  return (
    <div className="App">
      { cartToggle? <CartList cart_toggle={cart_toggle} />: <></> }
      <div className="header_nav">
        <h5>Shopping Cart React</h5>
        <button onClick={cart_toggle}>Cart</button>
      </div>
      <ProductList/>
    </div>
  );
}

export default App;
