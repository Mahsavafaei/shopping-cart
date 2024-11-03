import { createContext, useReducer, useEffect } from 'react';
import { sumCourse } from '../helper/helper';

export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemCounter: 0,
  totalPrice: 0,
  checkout: false,
  disCountAmount: 'qty',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      if (!state.selectedItems.find((i) => i.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ...sumCourse(state.selectedItems),
        checkout: false,
      };
    case 'REMOVE':
      const newSelectedItems = state.selectedItems.filter(
        (i) => i.id !== action.payload.id
      );
      return {
        selectedItems: [...newSelectedItems],
        ...sumCourse(newSelectedItems),
        checkout: false,
      };
    case 'SET_CART':
      return {
        ...state,
        ...action.payload,
      };
    case 'CHECKOUT':
      return {
        selectedItems: [],
        itemCounter: 0,
        totalPrice: 0,
        checkout: true,
      };
    default:
      throw new Error('Invalid action!');
  }
};

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartData'));
    if (savedCart) {
      dispatch({ type: 'SET_CART', payload: savedCart });
    }
  }, []);

  // Save data to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
