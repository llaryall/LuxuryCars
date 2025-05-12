import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import mockCars from '../../data/mockCars';

interface CarCardProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  color: string;
  horsepower: number;
  imageUrl: string;
}

const CarCard: React.FC<CarCardProps> = ({ 
  id, 
  brand, 
  model, 
  year, 
  price, 
  color, 
  horsepower, 
  imageUrl 
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const car = mockCars.find(car => car.id === id);
    if (car) {
      dispatch({ type: 'ADD_TO_CART', payload: car });
      toast.success(`${brand} ${model} has been added to your cart.`);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 bg-neutral-100">
        <img 
          src={imageUrl} 
          alt={`${brand} ${model}`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-secondary-500 text-white text-sm font-bold px-2 py-1 rounded">
          {year}
        </div>
      </div>
      
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-neutral-800">{brand} {model}</h3>
        
        <div className="mt-2 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Color:</span>
            <span className="font-medium text-neutral-800 flex items-center">
              <span 
                className="inline-block w-4 h-4 rounded-full mr-1" 
                style={{ backgroundColor: color }}
              ></span>
              {color}
            </span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-neutral-600">Horsepower:</span>
            <span className="font-medium text-neutral-800">{horsepower} HP</span>
          </div>
        </div>
        
        <div className="mt-4 text-2xl font-bold text-neutral-900">
          ${price.toLocaleString()}
        </div>
      </div>
      
      <div className="p-4 pt-0 mt-auto">
        <div className="grid grid-cols-2 gap-2">
          <Link 
            to={`/cars/${id}`}
            className="bg-primary-800 hover:bg-primary-700 text-white py-2 px-4 rounded text-center transition-colors"
          >
            Details
          </Link>
          <button 
            onClick={handleAddToCart}
            className="bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded text-center transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
