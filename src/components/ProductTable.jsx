import {useState} from 'react';
import Product from './Product';
import '../styles/productTable.css';

const ProductTable = (props) => {

  const [inStockOnly, setInStockOnly] = useState(false);

  const updateProductCount = (updatedProductName, isIncremented) => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...props.products];
    // find the product whose count was updated
    newProducts.forEach(product => {
      if (product.name === updatedProductName) {
        isIncremented ? product.count++ : product.count--;
      }
      return product;
    });
    // replace products array (initial state) with newProducts array
    props.setProducts(newProducts);
  }

  const renderProducts = () => {
    // create wrapper function for products to be shown (depends on value of inStockOnly)
    let productJSX = (product) => {
      return <Product 
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
        count={product.count}
        onUpdateCount={updateProductCount}
        onUpdateCart={props.onUpdateCart}
      />
    }

    // if inStockOnly is true, filter through 'products' array in state and only return products where stocked = true, then create a Product component for each
    if (inStockOnly) {return props.products.filter(product => product.stocked).map((product) => {return productJSX(product)})}
    // otherwise, inStockOnly is false, so return a Product component for each element in 'products' array in state
    return props.products.map((product) => { return productJSX(product) })
  }

  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  const checkboxStyle = {marginLeft: '10px'};

  return (
    <div className="productTableHeaderWrapper">
      <h1>Products</h1>
      <input 
        id="inStockOnly" 
        type="checkbox" 
        defaultChecked={false} 
        onChange={() => setInStockOnly(!inStockOnly)}
      />
      <label htmlFor="inStockOnly" style={checkboxStyle}>Only show in-stock items</label>
      
      <div className="productsTableWrapper">
      <div className="productTable">
        {renderProducts()}
      </div>
    </div>
    </div>
  )
}

export default ProductTable;