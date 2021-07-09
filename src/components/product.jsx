import React from 'react';
class Product extends React.Component {
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

  render() {
    console.log('product props obj: ', this.props);
    let stockedString = this.props.stocked === true ? 'yes' : 'no'
    
    return (
      <div key={this.props.name}>
        <button>+</button>
        <button>-</button>
        <h2>{this.props.name}</h2>
        <p>{this.props.price}</p>
        <p>In stock? {stockedString}</p>
      </div>
    );
  }
}

export default Product;