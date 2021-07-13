// import Layout from './components/Layout';
import NavBar from './components/NavBar';
import ProductPage from './components/ProductPage';
import './styles/layout.css';

function App() {
  return (
    // <Layout>
    <div className="root">
      <NavBar/>
      {/* omit 'this' from props.products, since functional components/fat arrows (one in the same) have/understand 'this' inherently */}
      {/* https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined */}
      {/* https://reactjs.org/docs/components-and-props.html */}
      <ProductPage/>
    </div>
    // </Layout>    
  );
}

export default App;

