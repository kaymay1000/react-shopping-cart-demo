import CartNavItem from './CartNavItem';
import '../styles/navBar.css';

const NavBar = (props) => {
  return (
    <div className="navBarWrapper">
      <CartNavItem cart={props.cart}/>
    </div>
  )
}

export default NavBar;
