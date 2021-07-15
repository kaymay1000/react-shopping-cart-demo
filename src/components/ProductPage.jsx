import {useState} from 'react';
import ProductTable from './ProductTable';

const ProductPage = (props) => {
  let [cart, setCart] = useState([]);

  return (
    <>
      <p>{cart.length}</p>
      <ProductTable 
        setCart={setCart}
      />
    </>
  )
}

export default ProductPage;