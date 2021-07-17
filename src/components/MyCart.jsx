import { Link } from 'react-router-dom';
import Shop from './Shop';

const MyCart = (props) => {
  console.log('props: ', props);
  console.log('props.order: ', props.order);
  console.log('Shop: ', Shop);

  // const order = Shop;
  return (
    <>
      <div className="split button-container">
        <Link to="/shop">
          <button>Continue Shopping</button>
        </Link>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
      <h1>My Cart</h1>
      <div className="send-left">
        <h3>Order Summary</h3>
      </div>
    </>
  )
}

export default MyCart;