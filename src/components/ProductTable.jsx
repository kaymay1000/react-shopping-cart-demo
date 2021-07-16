import {useState} from 'react';
import Product from './Product';
import PRODUCTS from '../data';
import '../styles/productTable.css';

const ProductTable = (props) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState(PRODUCTS);

  const updateProductCount = (updatedProductName, isIncremented) => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...products];
    // find the product whose count was updated
    newProducts.forEach(product => {
      if (product.name === updatedProductName) {
        isIncremented ? product.count++ : product.count--;
      }
      return product;
    });
    // replace products array (initial state) with newProducts array
    setProducts(newProducts);
  }

  const updateCartCount = () => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...products];
    // grab all products that have a count of at least 1
    const productsWithCount = newProducts.filter(product => product.count > 0);
    // initialize a variable to keep track of total products in cart, 
    // add up all current product count and update 'cart' state variable with the sum
    let totalProductsInCart = 0;
    productsWithCount.forEach(product => {
      totalProductsInCart += product.count;
    });
    props.setCart(totalProductsInCart);
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
        onUpdateCart={updateCartCount}
      />
    }

    // if inStockOnly is true, filter through 'products' array in state and only return products where stocked = true, then create a Product component for each
    if (inStockOnly) {return products.filter(product => product.stocked).map((product) => {return productJSX(product)})}
    // otherwise, inStockOnly is false, so return a Product component for each element in 'products' array in state
    return products.map((product) => { return productJSX(product) })
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