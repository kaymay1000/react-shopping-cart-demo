import { Link } from 'react-router-dom';
import '../styles/layout.css';

const OrderConf = (props) => {
  return (
    <>
      <div className="send-right button-container">
        <Link to="/shop">
          <button>Create New Order</button>
        </Link>
      </div>
      <h1>Order confirmed!</h1>
    </>
  )
} 

export default OrderConf;
