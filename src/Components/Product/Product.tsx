import * as React from 'react';
import './Product.css';

export interface IProductProps {
    id: number,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string,
    rating: {
        rate: number,
        count: number
    }
}

export const Product: React.FC<IProductProps> = (props: IProductProps) => {

  const AddtoCart = (id: number):void => {

  };
  return (
    <div className="product_wrapper">
      <img src={props.image} alt={props.title} height="200px" width="auto"/>
      <h5>{props.title}</h5>
      <h6>{props.description}</h6>
      <p>{props.category}</p>
      <p>{`Rating ${props.rating.rate}`}</p>
      <h6>{`Price ${props.price}`}</h6>
      <button onClick={()=>AddtoCart(props.id)}>Add to Cart</button>
    </div>
  );
}
