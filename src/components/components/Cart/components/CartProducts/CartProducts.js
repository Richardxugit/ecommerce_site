import React, { Component } from 'react';
import Thumb from '../../../List/components/Products/components/Thumb/Thumb';

class CartProducts extends Component {

    render() {
        const { product, removeProduct} = this.props;

        const classes = ['list-item'];

        return (
            <div className={classes.join(' ')}>
                <div
                    className="list-item__del"
                    onClick={() => removeProduct(product)}
                />
                <Thumb
                    classes="list-item__thumb"
                    src={product.imageUrl}
                    alt={product.name}
                />
                <div className="list-item__details">
                    <p className="title">{product.title}</p>
                    <p className="desc">
                        Quantity: {product.quantity}
                    </p>
                </div>
                <div className="list-item__price">
                    <p>AU${product.price}</p>
                </div>
            </div>
        );
    }
}

export default CartProducts;
