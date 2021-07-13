import React, {useState} from 'react';
import ProductTable from './ProductTable';

const ProductPage = () => {
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

  // QUESITON: is initialzing handlers with a parameter the right idea? 
  // Goal by doing this is to pass productCount down to ProductTable, 
  // then to Product, update it with props.count within product, 
  // then send it back up here to update the count... 
  // something about that flow seems wrong but I can't quite wrap my head around it.
  
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
      // QUESTION: would I need to pass an argument here to correctly invoke version of handlers that accept parameters?
      // onIncrement={handleIncrement(productCount)}
      // onDecrement={handleDecrement(productCount)}
    />
  )
}

export default ProductPage;