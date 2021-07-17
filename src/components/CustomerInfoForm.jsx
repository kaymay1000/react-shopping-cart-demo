import { Link } from 'react-router-dom';

const CustomerInfoForm = () => {
  return (
    <div>
      <p>I'll be a form eventually!</p>
      <Link to="/products">
        <button>Return to Products</button>
      </Link>
      <Link to="/order-conf">
        <button>Place Order</button>
      </Link>
    </div>
    
  )
}

export default CustomerInfoForm;
