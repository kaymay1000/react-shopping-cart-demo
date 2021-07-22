import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    // case 'SET_CART':
    //   return {
    //     ...state,
    //     cart: action.payload
    //   }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    case 'SET_IN_STOCK_ONLY':
      return {
        ...state,
        inStockOnly: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  // cart: {
  //   count: 0
  // },
  products: [],
  inStockOnly: {
    active: false
  }
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log('state within provider: ', state)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContext = createContext(initialState);

export default AppProvider;