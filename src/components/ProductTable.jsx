import React from 'react';
import Product from './Product';

const PRODUCTS = [
  { name: 'apple', price: '$0.79', stocked: true },
  { name: 'banana', price: '$0.50', stocked: true },
  { name: 'peach', price: '$0.85', stocked: false },
  { name: 'watermelon', price: '$1.50', stocked: true },
  { name: 'mango', price: '$2.00', stocked: false }
];

class ProductTable extends React.Component {
  render() {
    let productItems = PRODUCTS.map((product) => {
      return <Product key={product.name} name={product.name} price={product.price} stocked={product.stocked}/>
    });

    return <div>{productItems}</div>
  }
}

export default ProductTable;