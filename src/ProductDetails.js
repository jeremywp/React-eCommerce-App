import React, { Component } from 'react';
import {Rating} from "semantic-ui-react";
import {connect} from "react-redux";
import store from './store';

import './ProductDetails.css';

class ProductDetails extends Component {

  storeProducts = store.getState().products.items;

  componentDidMount() {
  }

  addToCart = () => {
    let productId = this.props.match.params.productId;
    for (let p in this.storeProducts) {
      if (this.storeProducts[p].id === Number(productId)) {
        store.dispatch({
          type: 'ADD_TO_CART',
          product: this.storeProducts[p],
        });
      }
    }
  };

  render() {
    if (store.getState().products.items === []){
      return (
        <div>
          404
        </div>
      )
    }
    else if (store.getState().products.items !== []) {
      const selectedProduct = store.getState().products.items[this.props.match.params.productId - 1];
      return (
        <div className="ui container" key={selectedProduct.id}>
          <div className="ui content">
            <div className="ui row">
              <div className="ui header">{selectedProduct.title}</div>
              <button className="ui button primary" onClick={this.addToCart}>Add to Cart</button>
            </div>
            <div className="ui extra row">
              <span>{selectedProduct.price}</span>
              <Rating rating={Math.round(selectedProduct.rating)} maxRating={5}/>
            </div>
            <div className="ui item centered">
              <img className="selectedProduct-img" src={selectedProduct.img} alt={selectedProduct.description}/>
            </div>
          </div>
          <div>
            {selectedProduct.description}
          </div>

        </div>
      )
    }
  }

}

const mapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct
});

export default connect(mapStateToProps)(ProductDetails);