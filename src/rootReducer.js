import { combineReducers } from "redux";
import products from "./productReducer";
import search from './searchReducer';

export default combineReducers({
  products,
  search
});