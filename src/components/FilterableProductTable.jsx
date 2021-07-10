import React, { useState } from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductTable from './ProductTable';

const FilterableProductTable = () => {
  return (
    <div className="filterableProductTableWrapper">
      <ProductTableHeader></ProductTableHeader>
      <ProductTable></ProductTable>
    </div>
   
  );
};

export default FilterableProductTable;