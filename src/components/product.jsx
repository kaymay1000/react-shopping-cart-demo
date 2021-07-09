import React from 'react';
const Product = () => {
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

  console.log('product props obj: ', this.props);
  let stockedString = this.props.stocked === true ? 'In Stock' : 'Out of Stock'
  
  return (
    <div key={this.props.name} className="productItemWrapper">
      <div className="productInfoWrapper">
        <p className="productInfo">{this.props.name}</p>
        <p className="productInfo">({this.props.price})</p>
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