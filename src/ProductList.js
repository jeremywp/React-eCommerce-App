import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './productActions';
import {Rating} from "semantic-ui-react";
import SearchBar from './SearchBar'

class ProductList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render(){
    const {error, loading, products, searchRes} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }


    if (this.props.searchRes.length === 0) {
      return (
        <div>
          <SearchBar onSubmit={this.forceUpdate}/>
          <div className="cards ui">
            {products.map(product =>
              <div className="ui card" key={product.id}>
                <div className="ui content">
                  <div className="ui header">{product.title}</div>
                  <div className="ui image">
                    <img className="product-img" src={product.img} alt={product.description}/>
                  </div>
                </div>
                <div className="ui extra row">
                  <span>{product.price}</span>
                  <Rating rating={Math.round(product.rating)} maxRating={5}/>
                </div>
              </div>)}
          </div>
        </div>
      );
    }
    else if (this.props.searchRes.length > 0) {
      return (
        <div>
          <SearchBar onSubmit={this.update}/>
          <div className="cards ui">
            {this.props.searchRes.map(product =>
              <div className="ui card" key={product.id}>
                <div className="ui content">
                  <div className="ui header">{product.title}</div>
                  <div className="ui image">
                    <img className="product-img" src={product.img} alt={product.description}/>
                  </div>
                </div>
                <div className="ui extra row">
                  <span>{product.price}</span>
                  <Rating rating={Math.round(product.rating)} maxRating={5}/>
                </div>
              </div>)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  searchRes: state.search.searchRes,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);