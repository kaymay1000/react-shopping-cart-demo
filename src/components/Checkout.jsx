import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      <div className="split button-container">
        <Link to="/cart">
          <button>Return to Cart</button>
        </Link>
        <Link to="/order-conf">
          <button>Place Order</button>
        </Link>
      </div>
      <h1>Checkout</h1>
      <div className="send-left">
        <h3>Billing</h3>
      </div>
      <div className="send-left">
        <h3>Shipping</h3>
      </div>
    </>
  )
}

export default Checkout;
