import React from 'react';
import ProductTable from './ProductTable';

const ProductPage = (props) => {
  // let [count, setCount] = useState(0);
  // const [inStockOnly, setInStockOnly] = useState(false);

  // const handleIncrement = () => {
  //   console.log('hitting increment');
  //   setCount(count++);
  // }

  // const handleDecrement = () => {
  //   console.log('hitting decrement');
  //   setCount(count--);
  // }

  // const toggleInStock = () => {
  //   setInStockOnly(!inStockOnly)
  // }

  // const updateProductCount = () => {

  // }

  return (
    <ProductTable 
      // count={count}
      // setCount={setCount}
      // onIncrement={handleIncrement}
      // onDecrement={handleDecrement}
      // onToggleInStock={toggleInStock}
    />
  )
}

export default ProductPage;