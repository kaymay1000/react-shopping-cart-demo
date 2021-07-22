import {useContext} from 'react';
import {AppContext} from '../providers/AppProvider';
import Product from './Product';
import '../styles/productTable.css';

const ProductTable = (props) => {
  // console.log('AppContext in product table: ', AppContext)
  const [state, dispatch] = useContext(AppContext);
  console.log('state in product table: ', state)
  // const [inStockOnly, setInStockOnly] = useState(false);
  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  const checkboxStyle = {marginLeft: '10px'};

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

  const toggleInStockOnly = () => {
    dispatch({
      type: 'SET_IN_STOCK_ONLY',
      payload:
        state.inStockOnly.active === true
        ? {active: false}
        : {active: true},
    })
  }

  const renderProducts = () => {
    let productsToRender = [];
    
    // if inStockOnly is true, filter through 'products' array in state and only return products where stocked = true, then set productToRender to filtered array
    // otherwise, inStockOnly is false, so set productsToRender to everything in products array
    // map over productsToRender to generate desired Products
    console.log('state.instockonly in renderProducts', state.inStockOnly)
    if (state.inStockOnly.active === true) {
      productsToRender = props.products.filter(product => product.stocked);
    } else {
      productsToRender = props.products;
    }

    productsToRender = props.products;

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
        // onChange={() => setInStockOnly(!inStockOnly)}
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
