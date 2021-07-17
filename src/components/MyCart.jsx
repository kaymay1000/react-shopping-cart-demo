import { Link } from 'react-router-dom';

const MyCart = (props) => {
  return (
    <>
       <Link to="/shop">
        <button>Continue Shopping</button>
      </Link>
      <Link to="/customer-info">
        <button>Checkout</button>
      </Link>
      <h1>My Cart</h1>
    </>
  )
}

export default MyCart;