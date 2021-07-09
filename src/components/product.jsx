import React from 'react';

class Product extends React.Component {
  render() {
    const productLabels = ['Strawberry', 'Banana', 'Apple', 'Grape'];
    let products = productLabels.map((label) => {
      return (
        <div key={label}>
          <button>+</button>
          <button>-</button>
          <h2>{label}</h2>
        </div>
      )
    })
    return products;
  }
}

export default Product;