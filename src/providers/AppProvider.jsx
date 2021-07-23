import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  console.log('state in reducer: ', state)
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: {
          items: action.payload.items,
          totalItemCount: action.payload.totalItemCount
        }
      }
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
  cart: {
    items: [],
    totalItemCount: 0
  },
  products: [],
  inStockOnly: false
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
