import React from 'react';
import '../styles/product.css';

const Product = (props) => {
  // constructor(props) {
  //   super(props)
  //   this.state = { count: 0 }
  //   this.incrementCount = this.incrementCount.bind(this)
  //   this.decrementCount = this.decrementCount.bind(this)
  // }

  // incrementCount() {
  //   console.log('current count: ', this.state.count);
  //   let newCount = this.state.count + 1;
  //   this.setState({count: newCount});
  //   console.log('new count: ', this.state.count);
  // }

  // decrementCount() {
  //   console.log('current count: ', this.state.count);
  //   let newCount = this.state.count - 1;
  //   this.setState({count: newCount});
  //   console.log('new count: ', this.state.count);
  // }

  console.log('product props obj: ', props);
  let stockedString = props.stocked === true ? 'In Stock' : 'Out of Stock'
  
  return (
    <div key={props.name} className="productItemWrapper">
      <div className="productInfoWrapper">
        <p className="productInfo">{props.name}</p>
        <p className="productInfo">({props.price})</p>
        <p className="productInfo">{stockedString}</p>
      </div>
      
      <div className="counterButtonWrapper">
        <button className="counterButton">+</button>
        <button className="counterButton">-</button>
      </div>
    </div>
  );
}

export default Product;