import React from 'react';
import Product from './Product';
import '../styles/productTable.css';

const PRODUCTS = [
  { name: 'Apple', price: '$0.79', stocked: true },
  { name: 'Banana', price: '$0.50', stocked: true },
  { name: 'Peach', price: '$0.85', stocked: false },
  { name: 'Watermelon', price: '$1.50', stocked: true },
  { name: 'Mango', price: '$2.00', stocked: false }
];

class ProductTable extends React.Component {
  render() {
    let productItems = PRODUCTS.map((product) => {
      return <Product key={product.name} name={product.name} price={product.price} stocked={product.stocked}/>
    });

    // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
    let checkboxStyle = {
      marginLeft: '10px'
    }

    return (
      <div className="productsTableWrapper">
        <h1>Products</h1>
        <input id="inStockOnly" type="checkbox" checked="false"/>
        <label htmlFor="inStockOnly" style={checkboxStyle}>Only show in-stock items</label>
        <div className="productTable">{productItems}</div>
      </div>
    )
  }
}

export default ProductTable;