import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Car } from '../data/mockCars';

// Define the cart item type
export interface CartItem extends Car {
  quantity: number;
}

// Define the cart state
interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// Define the cart actions
type CartAction =
  | { type: 'ADD_TO_CART'; payload: Car }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' };

// Create the initial cart state
const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Create the cart context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

// Create the cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
        
      );

      if (existingItemIndex !== -1) {
        // Item already exists in cart, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };

        

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          ...action.payload,
          quantity: 1,
        };

        console.log('New item added to cart:', newItem);

        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      console.log('Current state items:', state.items);
      const itemToRemove = state.items.find((item) => item.id === action.payload);
      console.log('REMOVE_FROM_CART action:', action.payload, 'Item to remove:', itemToRemove);
      if (!itemToRemove) return state;

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        totalItems: state.totalItems - itemToRemove.quantity,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      console.log('UPDATE_QUANTITY action:', action.payload);
      const itemIndex = state.items.findIndex((item) => item.id === id);

      if (itemIndex === -1) {
        console.log('Item not found for UPDATE_QUANTITY:', id);
        return state;
      }

      const item = state.items[itemIndex];
      const quantityDifference = quantity - item.quantity;

      const updatedItems = [...state.items];
      updatedItems[itemIndex] = {
        ...item,
        quantity,
      };

      console.log('Updated items:', updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalItems: state.totalItems + quantityDifference,
        totalPrice: state.totalPrice + (item.price * quantityDifference),
      };
    }

    case 'CLEAR_CART':
      return initialCartState;

    default:
      return state;
  }
};

// Create the cart provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
