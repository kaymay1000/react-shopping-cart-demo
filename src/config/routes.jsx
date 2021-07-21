import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shop from '../components/Shop';
import MyCart from '../components/MyCart';
import Checkout from '../components/Checkout';
import OrderConf from '../components/OrderConf';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shop"><Shop/></Route>
        <Route path="/cart"><MyCart/></Route>
        <Route path="/checkout"><Checkout/></Route>
        <Route path="/order-conf"><OrderConf/></Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes;
