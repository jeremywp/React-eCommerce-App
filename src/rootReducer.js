import { combineReducers } from "redux";
import products from "./productReducer";
import search from './searchReducer';
import select from './selectReducer';

export default combineReducers({
  products,
  search,
  select,
});