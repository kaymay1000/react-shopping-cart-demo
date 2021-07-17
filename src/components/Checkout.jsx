import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
    <div className="button-split button-container">
      <Link to="/cart">
        <button>Return to Cart</button>
      </Link>
      <Link to="/order-conf">
        <button>Place Order</button>
      </Link>
    </div>
      
      <h1>Checkout</h1>
      <h3>Billing</h3>
      <h3>Shipping</h3>
    </>
    
  )
}

export default Checkout;
