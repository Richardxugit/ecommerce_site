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
      <p className="list-item__title">{product.title}</p>
      <div className="list-item__price">
        <div className="val">
          <small>AU${product.price}</small>
        </div>
      </div>
      <div className="list-item__buy-btn">Add to cart</div>
    </div>
  );
};


export default Products;