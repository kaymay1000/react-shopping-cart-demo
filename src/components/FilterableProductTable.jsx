import React, { useState } from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {

  // const [inStockOnly, setInStockOnly] = useState(0);
  // const [count, setCount] = useState(0);

  return (
    <div className="filterableProductTableWrapper">
      <ProductTableHeader></ProductTableHeader>
      <ProductTable></ProductTable>
    </div>
   
  );
};

export default FilterableProductTable;