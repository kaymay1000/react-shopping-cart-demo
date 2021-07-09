import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const PRODUCTS = [
  { name: 'apple', price: '$0.79', stocked: true },
  { name: 'banana', price: '$0.50', stocked: true },
  { name: 'peach', price: '$0.85', stocked: false },
  { name: 'watermelon', price: '$1.50', stocked: true },
  { name: 'mango', price: '$2.00', stocked: false }
];

console.log('PRODUCTS obj in index: ', PRODUCTS);

ReactDOM.render(
  <React.StrictMode>
    <App products={PRODUCTS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Data Flow:
// index.js renders App component and appends it to #root element
// App component recieves PRODUCTS blob as its 'products' prop
// App passes its 'products' prop to its child component, Cart
// Cart takes in App's 'products' prop as this.props.products, and creates mutiple Product component instances, each with a 'name', 'price' and 'stocked' prop
// Cart passes its 'products' prop to each Product component it renders, and assigns them accordingly (name={product.name}, price={product.price}, stocked={product.stocked})
// Products component now expects a 'name', 'price', and 'stocked' prop
