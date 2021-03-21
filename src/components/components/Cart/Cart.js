import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProduct, updateCart } from '../../../services/Cart/actions';
import CartProducts from './components/CartProducts/CartProducts';
import './Cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openCart = () => {
    this.setState({ isOpen: true });
  };

  closeCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
    this.openCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  proceedToCheckout = () => {
    const {
      totalPrice,
      productQuantity,
    } = this.props.cartTotal;

    if (!productQuantity) {
      alert('Add some product in the bag!');
    } else {
      alert(
        `Checkout - Subtotal: AU$ ${totalPrice}`
      );
    }
  };

  render() {
    console.log(this.props)
    const { cartTotal, cartProducts, removeProduct } = this.props;

    const products = cartProducts.map(p => {
      return (
        <CartProducts product={p} quantity={cartTotal.productQuantity} removeProduct={removeProduct} key={p.id} />
      );
    });

    let classes = ['cart'];

    if (!!this.state.isOpen) {
      classes.push('cart--open');
    }

    return (
      <div className={classes.join(' ')}>
        {this.state.isOpen && (
          <div
            onClick={() => this.closeCart()}
            className="cart__close-btn"
          >
            X
          </div>
        )}

        {!this.state.isOpen && (
          <span
            onClick={() => this.openCart()}
            className="bag bag--cart-closed"
          >
            <span className="bag__quantity">{cartTotal.productQuantity}</span>
          </span>
        )}

        <div className="cart__content">
          <div className="cart__header">
            <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span>
            <span className="header-title">Bag</span>
          </div>

          <div className="cart__list-container">
            {products}
            {!products.length && (
              <p className="list-empty">
                Add some products in the bag <br />
                :)
              </p>
            )}
          </div>

          <div className="cart__footer">
            <div className="sub">SUBTOTAL</div>
            <div className="sub-price">
              <p className="sub-price__val">
                AU${`${cartTotal.totalPrice}`}
              </p>
            </div>
            <div onClick={() => this.proceedToCheckout()} className="buy-btn">
              Checkout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  newProduct: state.cart.productToAdd,
  productToRemove: state.cart.productToRemove,
  cartTotal: state.cart.sum
});

export default connect(
  mapStateToProps,
  { loadCart, updateCart, removeProduct }
)(Cart);