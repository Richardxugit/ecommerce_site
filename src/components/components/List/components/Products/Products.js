import React from 'react';
import Thumb from './components/Thumb/Thumb';

const Products = props => {

  const product = props.product;

  return (
    <div
      className="list-item"
    >
      <Thumb
        classes="list-item__thumb"
        src={product.imageUrl}
        alt={product.title}
      />
      <p className="list-item__title">{product.name}</p>
      <div className="list-item__price">
        <div className="val">
          <b>AU${product.price}</b>
          <div>{product.content}</div>
        </div>
      </div>
      <div className="list-item__buy-btn">Add to cart</div>
    </div>
  );
};


export default Products;