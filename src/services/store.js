import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let initialState = () => {

    const middleware = [thunk];

    const store = createStore(
        rootReducer,

        compose(
            applyMiddleware(...middleware)
            // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
};

export default initialState;