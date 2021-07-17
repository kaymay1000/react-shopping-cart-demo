import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import FETCH_DATA from '../data';
import ProductTable from './ProductTable';

const CreateOrder = (props) => {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await FETCH_DATA().then(res => res);
    if (response) {
      setProducts(response);
      setIsLoading(false);
    }
  }

  const updateCartCount = () => {
    // make a copy of array held in PRODUCTS data blob using spread syntax
    const newProducts = [...products];
    // grab all products that have a count of at least 1
    const productsWithCount = newProducts.filter(product => product.count > 0);
    // initialize a variable to keep track of total products in cart, 
    // add up all current product count and update 'cart' state variable with the sum
    let totalProductsInCart = 0;
    productsWithCount.forEach(product => {
      totalProductsInCart += product.count;
    });
    setCart(totalProductsInCart);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!products || isLoading) { return <p>Loading...</p> }

  return (
    <>
      <div className="send-right button-container">
        <Link to="/cart">
          <button>Proceed to Cart ({cart})</button>
        </Link>
      </div>
      <h1>Create Order</h1>
      <ProductTable products={products} setProducts={setProducts} setCart={setCart} onUpdateCart={updateCartCount}/>
    </>
  )
}

export default CreateOrder;
