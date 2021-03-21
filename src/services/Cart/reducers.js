const LOAD_CART = 'LOAD_CART';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_CART = 'UPDATE_CART';

const initialState = {
    products: [],
    sum: {
        productQuantity: 0,
        totalPrice: 0,
    }
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                productToAdd: Object.assign({}, action.payload)
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                productToRemove: Object.assign({}, action.payload)
            };
        case UPDATE_CART:
            return {
                ...state,
                sum: action.payload
            };
        default:
            return state;
    }
}

export default cartReducer;
