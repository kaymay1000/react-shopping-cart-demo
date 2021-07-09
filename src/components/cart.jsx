import React from 'react';
import Product from './Product';

class Cart extends React.Component {
  render() {
    const productsFromApp = this.props.products;
    console.log('cart props obj: ', this.props);
    let productItems = productsFromApp.map((product) => {
      return <Product key={product.name} name={product.name} price={product.price} stocked={product.stocked}/>
    });

    return (
      <div>
        <h1>Your Cart</h1>
        <div>{productItems}</div>
      </div>
    )
  }
}

export default Cart;