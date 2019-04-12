import React, { Component } from 'react';
import {Rating} from "semantic-ui-react";

class ProductDetails extends Component {

  render() {
    return (
      <div className="ui card" key={product.id}>
        <div className="ui content">
          <div className="ui header">{product.title}</div>
          <div className="ui image">
            <img className="product-img" src={product.img} alt={product.description}/>
          </div>
        </div>
        <div>
          {product.description}
        </div>
        <div className="ui extra row">
          <span>{product.price}</span>
          <Rating rating={Math.round(product.rating)} maxRating={5} />
        </div>
      </div>
    )
  }

}