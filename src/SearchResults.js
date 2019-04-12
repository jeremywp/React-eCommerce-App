import React, {Component} from 'react'
import { searchProducts } from "./searchActions";

let searchResult = [];

class SearchResults extends Component {
  componentDidMount() {
    this.props.dispatch(searchProducts());
  }

  render() {
    const {error, loading, products, searchRes} = this.props;

    return(
      <div>

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

const mapStateToProps = state => ({
  products: state.products.items,
  searchRes: state.products.items,
  loading: state.products.loading,
  error: state.products.error
});

export default connect(mapStateToProps)(SearchResults);