import * as React from 'react';
import { useContext } from 'react';
import { MyContext } from '../../App';
import "../../styles/Product.css";


export interface IProductProps {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export const Product: React.FC<IProductProps> = ({ id, title, price, category, description, image, rating }) => {

  const { addToCart } = useContext(MyContext);
  const info = { id: id, title: title, price: price, category: category, description: description, image: image , quantity: 1}
  return (
    <div className="product_wrapper">
      <img src={image} alt={title} height="200px" width="auto" />
      <h5>{title}</h5>
      <h6>{description}</h6>
      <p>{category}</p>
      <p>{`Rating ${rating.rate}`}</p>
      <h6>{`Price ${price}`}</h6>
      <button onClick={() => addToCart(info)}>Add to Cart</button>
    </div>
  );
}
