import { Link } from 'react-router-dom';

const OrderConf = (props) => {
  return (
    <>
      <h1>Order confirmed!</h1>
      <Link to="/shop">
        <button>Continue Shopping</button>
      </Link>
    </>
  )
} 

export default OrderConf;
