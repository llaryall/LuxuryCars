import React from 'react';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';

interface CartItemProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  color: string;
  quantity: number;
  imageUrl: string;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  brand,
  model,
  year,
  price,
  color,
  quantity,
  imageUrl,
  onUpdateQuantity,
  onRemove
}) => {
  return (
    <div className="flex flex-col md:flex-row border-b border-slate-200 py-4">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <img 
          src={imageUrl} 
          alt={`${brand} ${model}`} 
          className="w-full h-32 object-cover rounded"
        />
      </div>
      
      <div className="md:w-2/4 md:px-4">
        <h3 className="text-lg font-bold text-slate-800">{brand} {model}</h3>
        <p className="text-slate-600">{year} • {color}</p>
        <p className="mt-2 text-xl font-bold text-slate-900">${price.toLocaleString()}</p>
      </div>
      
      <div className="md:w-1/4 flex flex-col items-start md:items-end justify-between mt-4 md:mt-0">
        <div className="flex items-center border border-slate-300 rounded">
          <button 
            className="px-3 py-1 text-slate-600 hover:bg-slate-100"
            onClick={() => onUpdateQuantity(id, Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="px-3 py-1">{quantity}</span>
          <button 
            className="px-3 py-1 text-slate-600 hover:bg-slate-100"
            onClick={() => onUpdateQuantity(id, quantity + 1)}
          >
            +
          </button>
        </div>
        
        <button 
          className="mt-2 text-red-500 hover:text-red-700 text-sm flex items-center"
          onClick={() => onRemove(id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          Remove
        </button>
      </div>
    </div>
  );
};

interface ShoppingCartProps {
  items?: Array<{
    id: number;
    brand: string;
    model: string;
    year: number;
    price: number;
    color: string;
    quantity: number;
    imageUrl: string;
  }>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items }) => {
  const { state, dispatch } = useCart();
  
  // Use items from cart context if no items are provided as props
  const cartItems = items || state.items;
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    const itemToUpdate = state.items.find((item) => item.id === id);
    if (!itemToUpdate) return;

    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

    toast(
      <div>
        <p>{itemToUpdate.brand} {itemToUpdate.model} quantity updated.</p>
        <button
          onClick={() => {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: itemToUpdate.quantity } });
            toast.dismiss();
          }}
          className="text-teal-500 hover:text-teal-700"
        >
          Undo
        </button>
      </div>,
      { autoClose: 5000 }
    );
  };
  
  const handleRemoveItem = (id: number) => {
    const itemToRemove = state.items.find((item) => item.id === id);
    if (!itemToRemove) return;

    dispatch({ type: 'REMOVE_FROM_CART', payload: id });

    toast(
      <div>
        <p>{itemToRemove.brand} {itemToRemove.model} removed from cart.</p>
        <button
          onClick={() => {
            dispatch({ type: 'ADD_TO_CART', payload: itemToRemove });
            toast.dismiss();
          }}
          className="text-teal-500 hover:text-teal-700"
        >
          Undo
        </button>
      </div>,
      { autoClose: 5000 }
    );
  };
  
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // Assuming 8% tax
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 bg-slate-50 border-b border-slate-200">
        <h1 className="text-2xl font-bold text-slate-800">Shopping Cart</h1>
        <p className="text-slate-600 mt-1">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
      </div>
      
      {cartItems.length === 0 ? (
        <div className="p-6 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <p className="mt-4 text-slate-600">Your cart is empty</p>
          <a href="/cars" className="mt-4 inline-block bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors">
            Browse Cars
          </a>
        </div>
      ) : (
        <>
          <div className="p-6">
            {cartItems.map(item => (
              <CartItem 
                key={item.id}
                {...item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>
          
          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-slate-800 font-medium">${calculateSubtotal().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-slate-600">Tax (8%)</span>
                <span className="text-slate-800 font-medium">${calculateTax().toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-800 font-bold">Total</span>
                <span className="text-slate-800 font-bold">${calculateTotal().toLocaleString()}</span>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-white py-3 px-4 rounded font-medium transition-colors">
              Proceed to Checkout
            </button>
            
            <a href="/cars" className="mt-4 block text-center text-teal-500 hover:text-teal-700">
              Continue Shopping
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
