import { combineReducers } from 'redux';
import listReducer from './List/reducer';
import filterReducer from './Filter/reducer';
import sortReducer from './Sort/reducer';
import cartReducer from './Cart/reducers';

export default combineReducers({
    list: listReducer,
    filters: filterReducer,
    sort: sortReducer,
    cart: cartReducer,
});
