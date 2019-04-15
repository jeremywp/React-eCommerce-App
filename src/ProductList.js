import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './productActions';
import {Rating} from "semantic-ui-react";
import SearchBar from './SearchBar'
import {
  Link
} from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render(){
    const {error, loading, products, searchRes, searchTerm} = this.props;

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }


    if (searchTerm === '') {
      return (
        <div>
          <SearchBar onSubmit={this.forceUpdate}/>
          <div className="cards ui">
            {products.map(product =>
              <Link to={`/products/${product.id}`} className="ui card" key={product.id}>
                <div className="ui content">
                  <div className="ui header">{product.title}</div>
                  <div className="ui item centered">
                    <img className="product-img ui image" src={product.img} alt={product.description}/>
                  </div>
                </div>
                <div className="ui extra row">
                  <span>{product.price}</span>
                  <Rating rating={Math.round(product.rating)} maxRating={5}/>
                </div>
              </Link>)}
          </div>
        </div>
      );
    }
    else if (searchTerm !== '') {
      return (
        <div>
          <div>
          <SearchBar onSubmit={this.forceUpdate}/>
          <span>
            Filter: '{searchTerm}'
          </span>
          </div>
          <div className="cards ui">
            {searchRes.map(product =>
              <Link to={`/products/${product.id}`} className="ui card" key={product.id}>
                <div className="ui content">
                  <div className="ui header">{product.title}</div>
                  <div className="ui item centered">
                    <img className="product-img" src={product.img} alt={product.description}/>
                  </div>
                </div>
                <div className="ui extra row">
                  <span>{product.price}</span>
                  <Rating rating={Math.round(product.rating)} maxRating={5}/>
                </div>
              </Link>)}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  searchRes: state.search.searchRes,
  searchTerm: state.search.searchTerm,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(ProductList);