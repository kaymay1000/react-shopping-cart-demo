import {useState} from 'react';
import ProductTable from './ProductTable';

const ProductPage = (props) => {
  let [cart, setCart] = useState(0);

  return (
    <>
      <p>{cart}</p>
      <ProductTable setCart={setCart}/>
    </>
  )
}

export default ProductPage;