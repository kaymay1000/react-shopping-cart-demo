import { Link } from 'react-router-dom';

const MyCart = (props) => {
  return (
    <>
      <div className="button-split button-container">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
      <h1>My Cart</h1>
    </>
  )
}

export default MyCart;