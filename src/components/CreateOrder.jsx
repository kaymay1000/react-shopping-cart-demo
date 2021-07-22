import {useState, useEffect, useContext} from 'react';
import {AppContext} from '../providers/AppProvider';
import { Link } from 'react-router-dom';
import FETCH_DATA from '../data';
import ProductTable from './ProductTable';

const CreateOrder = (props) => {
  const [state, dispatch] = useContext(AppContext);
  const [cart, setCart] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await FETCH_DATA().then(res => res);
    if (response) {
      console.log('fetchData response: ', response)
      state.products = response;
      console.log('state.products in fetchData: ', state.products)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const updateCartCount = () => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...state.products];
    // grab all products that have a count of at least 1
    const productsWithCount = newProducts.filter(product => product.count > 0);
    // initialize a variable to keep track of total products in cart, 
    // add up all current product count and update 'cart' state variable with the sum
    let totalProductsInCart = 0;
 
    productsWithCount.forEach(product => {
      totalProductsInCart += product.count;
    });
    // dispatch({
    //   type: 'SET_CART',
    //   payload: {cart.count: totalProductsInCart}
    // })
    setCart(totalProductsInCart);
  }
  
  // if (!state.products || isLoading) { return <p>Loading...</p> }
  if (!state.products) { return <p>Loading...</p> }

  return (
    <>
      <div className="send-right button-container">
        <Link to="/cart">
          <button>Proceed to Cart ({cart})</button>
        </Link>
      </div>
      <h1>Create Order</h1>
      {/* <ProductTable products={state.products} setProducts={setProducts} setCart={setCart} onUpdateCart={updateCartCount}/> */}
      <ProductTable products={state.products} setCart={setCart} onUpdateCart={updateCartCount}/>
    </>
  )
}

export default CreateOrder;
