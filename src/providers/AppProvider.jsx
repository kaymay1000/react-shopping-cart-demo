import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload
      }
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  cart: {
    count: 0
  },
  products: {
    product: {
      stocked: true,
      count: 0
    }
  }
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContext = createContext(initialState);

export default AppProvider;