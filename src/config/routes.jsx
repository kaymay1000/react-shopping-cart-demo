import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateOrder from '../components/CreateOrder';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import OrderConf from '../components/OrderConf';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/create-order"><CreateOrder/></Route>
        <Route path="/cart"><Cart/></Route>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/order-conf"><OrderConf/></Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes;
