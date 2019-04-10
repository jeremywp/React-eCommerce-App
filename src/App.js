import React, { Component } from 'react';
import { Provider } from 'react-redux';
import axios from "axios";
import { createStore } from "redux";
import { Rating } from 'semantic-ui-react'

import './App.css'
import SearchBar from './SearchBar'


const initialState = {
  products: [],
  searchRes: []
};

let searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SEARCH'): {
      return Object.assign({}, state, {
        searchResults: action.search
      })
    }
    default:
      return state
  }
};

const store = createStore(searchReducer);

class App extends Component {
  state = {
    products: [],
    searchRes: [],
  };


  componentDidMount() {
    axios.get('https://my-json-server.typicode.com/tdmichaelis/typicode/products')
      .then(res => {
        this.setState({
          products: res.data,
          searchRes: res.data
        })
      })
  }

  onSearchSubmit = (q) => {
    let searchRes = [];
    let str = new RegExp(q , "ig");
    let products = this.state.products;
    for (let i=0; i < products.length; i++) {
      if (products[i].title.match(str)) {
        searchRes.push(products[i]);
        this.setState({
          searchRes: searchRes
        });
      }
    }
  };

  render() {
    return(
      <div>
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
        <div className="cards ui">
          {this.state.searchRes.map(product =>
            <div className="ui card" key={product.id}>
              <div className="ui content">
                <div className="ui header">{product.title}</div>
                <div className="ui image">
                  <img className="product-img" src={product.img} alt={product.description}/>
                </div>
              </div>
              <div className="ui extra row">
                <span>{product.price}</span>
                <Rating rating={Math.round(product.rating)} maxRating={5} />
              </div>
            </div>)}
        </div>
      </div>
    )
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default WrappedApp;
