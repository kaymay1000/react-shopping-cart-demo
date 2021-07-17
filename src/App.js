import Routes from './config/routes';
import './styles/layout.css';

function App() {
  return (
    <div className="root">
      {/* omit 'this' from props.products, since functional components/fat arrows (one in the same) have/understand 'this' inherently */}
      {/* https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined */}
      {/* https://reactjs.org/docs/components-and-props.html */}
      <Routes/>
    </div>
  );
}

export default App;
