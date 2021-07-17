import { Link } from 'react-router-dom';

const OrderConf = (props) => {
  return (
    <div>
      <p>Order confirmed!</p>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  )
} 

export default OrderConf;
