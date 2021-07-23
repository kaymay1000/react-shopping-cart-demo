import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../providers/AppProvider';
import { Link } from 'react-router-dom';
import FETCH_DATA from '../data';
import ProductTable from './ProductTable';

const CreateOrder = (props) => {
  const [state, dispatch] = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await FETCH_DATA().then(res => res);
    if (response) {
      setIsLoading(false);
      dispatch({
        type: 'SET_PRODUCTS',
        payload: response
      })
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!state.products || isLoading) { return <p>Loading...</p> }

  return (
    <>
      <div className="send-right button-container">
        <Link to="/cart">
          <button>Proceed to Cart ({state.cart.totalItemCount})</button>
        </Link>
      </div>
      <h1>Create Order</h1>
      <ProductTable/>
    </>
  )
}

export default CreateOrder;
