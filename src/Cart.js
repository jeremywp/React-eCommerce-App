import React, { Component } from 'react';
import {connect} from "react-redux";
import store from './store'
import {Link} from 'react-router-dom'

class Cart extends Component {

  handleClick(id, event){
    this.removeItem(id)
  }

  removeItem = (id) => {
    store.dispatch({
      type: 'REMOVE_ITEM',
      cartProducts: store.getState().cart.cartProducts,
      id: id,
    })
  };

  checkOut = () => {
    store.dispatch({
      type: 'CHECK_OUT_CART',
      cartProducts: [],
    })
  };

  render() {
    const cartProducts = store.getState().cart.cartProducts;
    let cartTotal = 0;

    for (let i=0; i< cartProducts.length; i++) {
      cartTotal += cartProducts[i].price;
    }

    return(
      <div className="ui divided items">

        {cartProducts.map((product, index) =>
        <div className="item" key={index}>
          <div className="ui tiny image">
            <img className="cart-img" src={product.img} alt={product.description}/>
          </div>
          <div className="ui middle aligned content cart-content">
            <div>{product.title}</div>
            <div>{product.price}</div>
          </div>
          <div className="ui extra">
            <Link to="/Cart" className="ui right floated primary button" id={index} onClick={(e) => this.handleClick(index,e)}>
              Remove Item
              <i className="ui right trash icon">

              </i>
            </Link>
          </div>
        </div>)}

        <div className="ui item checkout">
          <div className="right floated">
            Total price: {cartTotal}
          </div>
          <Link to="/" className="ui primary button checkout-btn" onClick={this.checkOut}>
            Check Out
          </Link>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  products: state.products.items,
  searchRes: state.search.searchRes,
  searchTerm: state.search.searchTerm,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(Cart);