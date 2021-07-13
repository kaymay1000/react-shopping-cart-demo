import React from 'react';
import '../styles/product.css';

const Product = (props) => {
  console.log('product props: ', props);
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
          onClick={props.onDecrement}
          // QUESTION: what is wrong with my syntax here (and line 28)? my goal is to grab the current count (props.count) for an individual product, pass it up to ProductTable, and finally up to ProductPage
          // onClick={(props.count) => props.onDecrement(props.count)}
          className="counterButton"
          disabled={props.count === 0 ? true : false}
        >
            -
        </button>
        <button
          onClick={props.onIncrement}
          // onClick={(props.count) => props.onIncrement(props.count)}
          className="counterButton"
          // disabled={props.stocked === false ? true : false}
        >
            +
        </button>
        <div className="totalProducts">Total: {props.count}</div>
      </div>
    </div>
  );
}

export default Product;