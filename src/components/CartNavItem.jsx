import { Link } from 'react-router-dom';

const CartNavItem = (props) => {
  return (
    <div>
      <Link to="/cart">
        <button>My Cart ({props.cart})</button>
      </Link>
    </div>
  )
}

export default CartNavItem;
