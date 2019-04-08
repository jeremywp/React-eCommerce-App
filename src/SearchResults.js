import React, {Component} from 'react'

import SearchBar from "./SearchBar";

let searchResult = [];

class SearchResults extends Component {

/*  componentDidMount() {
    searchResult = this.props.state.searchRes;
  }*/

  render() {
    return(
      <div>
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
        <ul>
          {searchResult.map(product =>
            <li key={product.id}>
              {product.title}
            </li>)}
        </ul>
      </div>
    )
  }
}


export default SearchResults