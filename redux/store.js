import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);