import { createStore } from 'redux';
import cartReducer from './Reducer/CartReducer';

const store = createStore(cartReducer);

export default store;
