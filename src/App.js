import './App.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

// must pass props in to functional component in order to make it accessible (https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined, https://reactjs.org/docs/components-and-props.html)
function App(props) {
  const products = props.products;
  console.log('App props obj: ', props);

  return (
    <div className="App">
      <NavBar/>
      {/* omit 'this' from props.products, since functional components don't have context of 'this' */}
      <Cart products={products}/>
    </div>
  );
}

export default App;

