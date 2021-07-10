import React from 'react';

const ProductTableHeader = () => {
  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  let checkboxStyle = {marginLeft: '10px'}

  return (
    <div className="productTableHeaderWrapper">
      <h1>Products</h1>
      <input id="inStockOnly" type="checkbox" checked="false"/>
      <label htmlFor="inStockOnly" style={checkboxStyle}>Only show in-stock items</label>
    </div>
  )
}

export default ProductTableHeader;