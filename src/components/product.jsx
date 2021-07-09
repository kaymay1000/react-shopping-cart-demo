import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount() {
    console.log('current count: ', this.state.count);
    let newCount = this.state.count + 1;
    this.setState({count: newCount});
    console.log('new count: ', this.state.count);
  }

  decrementCount() {
    console.log('current count: ', this.state.count);
    let newCount = this.state.count - 1;
    this.setState({count: newCount});
    console.log('new count: ', this.state.count);
  }

  render() {
    const productLabels = ['Strawberry', 'Banana', 'Apple', 'Grape'];
    let products = productLabels.map((label) => {
      return (
        <div key={label}>
          <button onClick={this.incrementCount}>+</button>
          <button onClick={this.decrementCount}>-</button>
          <h2>{label}</h2>
        </div>
      )
    })
    return products;
  }
}

export default Product;