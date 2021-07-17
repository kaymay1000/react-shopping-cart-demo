import { Link } from 'react-router-dom';

const MyCart = (props) => {
  return (
    <div>
      <p>My Cart!</p>
      <Link to="/customer-info">
        <button>Checkout</button>
      </Link>
    </div>
  )
}

export default MyCart;