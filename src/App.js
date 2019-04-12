import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Cart from './Cart'
import './App.css'
import ProductList from "./ProductList";


class App extends Component {
  componentDidMount() {

  }


  render() {
    return(
      <Router>
        <div className="menu ui">
          <Link to="/products" className="item">
            Products
          </Link>
          <Link to="/Cart" className="item">
            Cart
          </Link>
        </div>
        <Switch>
          <Route exact path="/products" component={ProductList}/>
          <Route path="/cart" component={Cart}/>
          <Redirect from="/" to="/products"/>
        </Switch>
      </Router>
    )
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default WrappedApp;
