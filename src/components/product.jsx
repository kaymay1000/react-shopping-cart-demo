// import React from 'react';
import '../styles/product.css';

const Product = (props) => {
  
  return (
    <div key={props.name} className="productItemWrapper">
      <div className="productInfoWrapper">
        <p className="productInfo">{props.name}</p>
        <p className="productInfo">({props.price})</p>
        <p className="productInfo">{props.stocked ? 'In Stock' : 'Out of Stock'}</p>
      </div>
      
      <div className="counterButtonWrapper">
        <button
          onClick={() => props.onUpdateCount(props.name, false)}
          className="counterButton"
          disabled={props.count === 0}
        >
            -
        </button>
        <button
          onClick={() => props.onUpdateCount(props.name, true)}
          className="counterButton"
          disabled={!props.stocked}
        >
            +
        </button>
        <div className="totalProducts">Total: {props.count}</div>
      </div> 
    </div>
  );
}

export default Product;