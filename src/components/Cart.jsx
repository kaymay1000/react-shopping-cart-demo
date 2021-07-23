import { Link } from 'react-router-dom';

const Cart = (props) => {
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
