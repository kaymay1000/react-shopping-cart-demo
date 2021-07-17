import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Shop from '../components/Shop';
import MyCart from '../components/MyCart';
import CustomerInfoForm from '../components/CustomerInfoForm';
import OrderConf from '../components/OrderConf';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shop"><Shop/></Route>
        <Route path="/cart"><MyCart/></Route>
        <Route path="/customer-info"><CustomerInfoForm/></Route>
        <Route path="/order-conf"><OrderConf/></Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default Routes;