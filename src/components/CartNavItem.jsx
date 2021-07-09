import React from 'react';

class CartNavItem extends React.Component {

  // eventually logic to determine the current count of items in cart will go here (by checking state object for current productCount value), 
  // and will be displayed in parentheses next to 'My Cart' on the button (<button>My Cart ({})</button>)
  render() {
    return (
      <div>
        <button>My Cart</button>
        {/* <button>My Cart ({})</button> */}
      </div>
    )
  }
}

export default CartNavItem;