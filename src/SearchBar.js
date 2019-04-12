import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from "./store";

class SearchBar extends Component {

  state = {
    value: '',
    searchTerm: '',
  };

  onChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  };

  onSearchSubmit = (q) => {
    let searchRes = [];
    let str = new RegExp(q , "ig");
    let products = store.getState().products.items;
    for (let i=0; i < products.length; i++) {
      if (products[i].title.match(str)) {
        searchRes.push(products[i]);
        store.dispatch({
          type: 'ADD_SEARCH_RESULT',
          searchRes: searchRes,
          searchTerm: q,
        });
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.onSearchSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form className='ui input'>
        <input
          onChange={this.onChange}
          value={this.state.value}
          type='text'
        />
        <input
          onClick={this.handleSubmit}
          className='ui primary input button'
          type='submit'
          value='Search'
        />
      </form>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  searchRes: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(SearchBar);