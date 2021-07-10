import React, { useState, useEffect } from 'react';
import Product from './Product';
import '../styles/productTable.css';

const PRODUCTS = [
  { name: 'Apple', price: '$0.79', stocked: true },
  { name: 'Banana', price: '$0.50', stocked: true },
  { name: 'Peach', price: '$0.85', stocked: false },
  { name: 'Watermelon', price: '$1.50', stocked: true },
  { name: 'Mango', price: '$2.00', stocked: false }
];

const ProductTable = () => {
  // useState hook replaces need for call to setState()
  let [inStockOnly, setInStockOnly] = useState(false);
  
  const allProducts = PRODUCTS.map((product) => {
    return <Product key={product.name} name={product.name} price={product.price} stocked={product.stocked}/>
  });
  const inStockProducts = allProducts.filter(product => product.props.stocked);
  let productsToShow = inStockOnly === true ? inStockProducts : allProducts;

  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  let checkboxStyle = {marginLeft: '10px'};

  return (
    <div className="productTableHeaderWrapper">
      <h1>Products</h1>
      <input 
        id="inStockOnly" 
        type="checkbox" 
        defaultChecked={false} 
        onChange={() => {
          // toggle inStockOnly state variable to the opposite of its current value
          setInStockOnly(!inStockOnly);
        }}
      />
      <label htmlFor="inStockOnly" style={checkboxStyle}>Only show in-stock items</label>
      
      <div className="productsTableWrapper">
      <div className="productTable">
        {productsToShow}
      </div>
    </div>
    </div>
  )
}

export default ProductTable;