import {useContext} from 'react';
import {AppContext} from '../providers/AppProvider';
import Product from './Product';
import '../styles/productTable.css';

const ProductTable = (props) => {
  const [state, dispatch] = useContext(AppContext);
  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  const checkboxStyle = {marginLeft: '10px'};

  const updateProductCount = (updatedProductName, isIncremented) => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...state.products];
    // find the product whose count was updated
    newProducts.forEach(product => {
      if (product.name === updatedProductName) {
        isIncremented ? product.count++ : product.count--;
      }
      return product;
    });
  }

  const toggleInStockOnly = () => {
    dispatch({
      type: 'SET_IN_STOCK_ONLY',
      payload: !state.inStockOnly
    });
  }

  const renderProducts = () => {
    let productsToRender = [];
    
    // if state.inStockOnly is true, filter through 'products' array in state and only return products where stocked = true, then set productToRender to filtered array
    // otherwise, state.inStockOnly is false, so set productsToRender to everything in products array
    // map over productsToRender to generate desired Products
    if (state.inStockOnly) {
      productsToRender = state.products.filter(product => product.stocked);
    } else {
      productsToRender = state.products;
    }

    return productsToRender.map((product) => {
      return (
        <Product 
          key={product.name}
          name={product.name}
          price={product.price}
          stocked={product.stocked}
          count={product.count}
          onUpdateCount={updateProductCount}
          onUpdateCart={props.onUpdateCart}
        />
      )
    })
  }

  return (
    <div className="productTableHeaderWrapper">
      <input 
        id="inStockOnly" 
        type="checkbox" 
        defaultChecked={false} 
        onChange={toggleInStockOnly}
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
