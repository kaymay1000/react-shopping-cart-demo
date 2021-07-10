import React, { useState } from 'react';
import '../styles/product.css';

const Product = (props) => {
  let [count, setCount] = useState(0);
  let stockedValue = props.stocked === true ? 'In Stock' : 'Out of Stock';
  
  return (
    <div key={props.name} className="productItemWrapper">
      <div className="productInfoWrapper">
        <p className="productInfo">{props.name}</p>
        <p className="productInfo">({props.price})</p>
        <p className="productInfo">{stockedValue}</p>
      </div>
      
      <div className="counterButtonWrapper">
        <button
          onClick={() => {
            count--
            setCount(count)
          }}
          className="counterButton"
          disabled={count === 0 ? true : false}
        >
            -
        </button>
        <button 
          onClick={() => {
            count++
            setCount(count)
          }}
          className="counterButton"
          disabled={props.stocked === false ? true : false}
        >
            +
        </button>
        <div className="totalProducts">Total: {count}</div>
      </div>
    </div>
  );
}

export default Product;