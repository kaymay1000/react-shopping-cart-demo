import {useState, useEffect} from 'react';
import FETCH_DATA from '../data';
import NavBar from './NavBar';
import ProductTable from './ProductTable';

const CartAppContainer = (props) => {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await FETCH_DATA().then(res => res);
    if (response) {
      setProducts(response);
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

  return (
    <>
      <NavBar cart={cart}/>
      <ProductTable products={products} setProducts={setProducts} setCart={setCart} onUpdateCart={updateCartCount}/>
    </>
  )
}

export default CartAppContainer;