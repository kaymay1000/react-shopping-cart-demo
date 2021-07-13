import React, {useState} from 'react';
import ProductTable from './ProductTable';

const ProductPage = () => {
   // useState hook replaces need for call to setState()
   let [inStockOnly, setInStockOnly] = useState(false);
   let [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('hitting increment');
    count++;
    setCount(count);
  }

  const handleDecrement = () => {
    console.log('hitting decrement');
    count--;
    setCount(count);
  }

  //  const handleIncrement = (productCount) => {
  //   productCount++;
  //   setCount(productCount);
  // }

  // const handleDecrement = (productCount) => {
  //   productCount--;
  //   setCount(productCount);
  // }

  return (
    <ProductTable 
      inStockOnly={inStockOnly} 
      setInStockOnly={setInStockOnly}
      count={count}
      setCount={setCount}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  )
}

export default ProductPage;