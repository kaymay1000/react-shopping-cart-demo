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
  // useState hook replaces need for call to setState()
  // let [inStockOnly, setInStockOnly] = useState(false);
  // let [count, setCount] = useState(0);
  console.log('product table props: ', props);

  // const handleIncrement = () => {
  //   console.log('props in handle inc', props);
  //   props.count++;
  //   props.setCount(props.count);
  // }

  // const handleDecrement = () => {
  //   console.log('props in handle dec', props);
  //   props.count--;
  //   props.setCount(props.count);
  // }

  // const handleIncrement = (productCount) => {
  //   productCount++;
  //   setCount(productCount);
  // }

  // const handleDecrement = (productCount) => {
  //   productCount--;
  //   setCount(productCount);
  // }

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