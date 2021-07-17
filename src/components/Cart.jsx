import { Link } from 'react-router-dom';
import Shop from './CreateOrder';

const Cart = (props) => {
  console.log('props: ', props);
  console.log('props.order: ', props.order);
  console.log('Shop: ', Shop);

  // const order = Shop;
  return (
    <>
      <div className="split button-container">
        <Link to="/create-order">
          <button>Revise Order</button>
        </Link>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
      <h1>Cart</h1>
      <div className="send-left">
        <h3>Order Summary</h3>
      </div>
    </>
  )
}

export default Cart;