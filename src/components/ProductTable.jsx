import React, {useState} from 'react';
import Product from './Product';
import '../styles/productTable.css';

const PRODUCTS = [
  { name: 'Apple', price: '$0.79', stocked: true },
  { name: 'Banana', price: '$0.50', stocked: true },
  { name: 'Peach', price: '$0.85', stocked: false },
  { name: 'Watermelon', price: '$1.50', stocked: true },
  { name: 'Mango', price: '$2.00', stocked: false }
];

const ProductTable = (props) => {
  // QUESTION: is it best practice to initialize state within a child component, if that child component is the only place it will be used (i.e. other components don't need to know about it/its current value?)
  // or is it best practice to initialize state as high up the hierarchy/as globally as possible (i.e. ProductPage) and pass it down as far as it needs to go (in this case, just down one level to this file)?
  // second option seems to defeat the purpose of creating ProductPage in the first place (other than to handle count state)?
  // let [inStockOnly, setInStockOnly] = useState(false);
  console.log('product table props: ', props);

  const allProducts = PRODUCTS.map((product) => {
    return <Product 
      key={product.name}
      name={product.name}
      price={product.price}
      stocked={product.stocked}
      count={props.count}
      setCount={props.setCount}
      onIncrement={props.onIncrement}
      onDecrement={props.onDecrement}
      // QUESTION: ditto from similar question on ProductPage (line 38)
      // onIncrement={props.onIncrement(productCount)}
      // onDecrement={props.onDecrement(productCount)}
    />
  });

  const inStockProducts = allProducts.filter(product => product.props.stocked);
  let productsToShow = props.inStockOnly === true ? inStockProducts : allProducts;

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
          props.setInStockOnly(!props.inStockOnly);
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