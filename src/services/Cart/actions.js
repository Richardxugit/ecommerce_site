const LOAD_CART = 'LOAD_CART';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_CART = 'UPDATE_CART';

export const loadCart = products => ({
  type: LOAD_CART,
  payload: products
});

export const addProduct = product => ({
  type: ADD_PRODUCT,
  payload: product
});

export const removeProduct = product => ({
  type: REMOVE_PRODUCT,
  payload: product
});

export const updateCart = (cartProducts) => dispatch => {
  console.log(cartProducts)
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  let cartTotal = {
    productQuantity,
    totalPrice,
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
