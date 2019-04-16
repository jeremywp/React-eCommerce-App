import { combineReducers } from "redux";
import products from "./productReducer";
import search from './searchReducer';
import select from './selectReducer';
import cart from './cartReducer';

export default combineReducers({
  products,
  search,
  select,
  cart,
});