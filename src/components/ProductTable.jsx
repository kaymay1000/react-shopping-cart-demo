import {useState} from 'react';
import Product from './Product';
import '../styles/productTable.css';

const PRODUCTS = [
  { name: 'Apple', price: '$0.79', stocked: true, count: 0 },
  { name: 'Banana', price: '$0.50', stocked: true, count: 0 },
  { name: 'Peach', price: '$0.85', stocked: false, count: 0 },
  { name: 'Watermelon', price: '$1.50', stocked: true, count: 0 },
  { name: 'Mango', price: '$2.00', stocked: false, count: 0 }
];

const ProductTable = (props) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const [products, setProducts] = useState(PRODUCTS);

  const updateProductCount = (updatedProductName, isIncremented) => {
    // make a copy of array held in 'products' state variable using spread syntax (evaluates to the PRODUCTS array)
    const newProducts = [...products];
    // find the product whose count was updated
    newProducts.forEach(product => {
      if (product.name === updatedProductName) {
        isIncremented ? product.count++ : product.count--;
      }
      return product;
    })

    const productsWithCount = newProducts.filter(product => product.count > 0);
    props.setCart(productsWithCount);
    // replace products array (initial state) with newProducts array
    setProducts(newProducts);
     
  }

  const renderProducts = () => {
    if (inStockOnly) {
      return products.filter(product => product.stocked).map((product) => {
        console.log(product)
        return <Product 
          key={product.name}
          name={product.name}
          price={product.price}
          stocked={product.stocked}
          count={product.count}
          onUpdateCount={updateProductCount}
        />
      });
    }
    return products.map((product) => {
      console.log(product)
      return <Product 
        key={product.name}
        name={product.name}
        price={product.price}
        stocked={product.stocked}
        count={product.count}
        onUpdateCount={updateProductCount}
    />
  })
}

  // example of how to pass css to the style attribute in React... css properties must be camelCased and stored in a JS object, then injected into JSX
  const checkboxStyle = {marginLeft: '10px'};

  return (
    <div className="productTableHeaderWrapper">
      <h1>Products</h1>
      <input 
        id="inStockOnly" 
        type="checkbox" 
        defaultChecked={false} 
        onChange={() => setInStockOnly(!inStockOnly)}
      />
      <label htmlFor="inStockOnly" style={checkboxStyle}>Only show in-stock items</label>
      
      <div className="productsTableWrapper">
      <div className="productTable">
        {renderProducts()}
      </div>
    </div>
    </div>
  )
}

export default ProductTable;