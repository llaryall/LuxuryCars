import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import mockCars from '../../data/mockCars';
import { toast } from 'react-toastify';

interface CarDetailProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  color: string;
  horsepower: number;
  engine: string;
  transmission: string;
  fuelType: string;
  mileage: number;
  description: string;
  imageUrl: string;
  images: string[];
}

const CarDetail: React.FC<CarDetailProps> = ({
  id,
  brand,
  model,
  year,
  price,
  color,
  horsepower,
  engine,
  transmission,
  fuelType,
  mileage,
  description,
  imageUrl,
  images,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(imageUrl);

  const { dispatch } = useCart();

  const handleAddToCart = () => {
    const car = mockCars.find((car) => car.id === id);
    if (car) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: car,
      });
      if (quantity > 1) {
        dispatch({
          type: 'UPDATE_QUANTITY',
          payload: { id: car.id, quantity },
        });
      }

      const toastId = toast(
        <div>
          Added to cart!{' '}
          <button
            onClick={() => {
              dispatch({ type: 'REMOVE_FROM_CART', payload: car.id });
              toast.dismiss(toastId);
            }}
          >
            Undo
          </button>
        </div>,
        { autoClose: 5000 }
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Left side - Car images */}
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-96 bg-slate-100">
            <img
              src={activeImage}
              alt={`${brand} ${model}`}
              className="w-full h-full object-contain"
            />
            <div className="absolute top-2 right-2 bg-teal-500 text-white text-sm font-bold px-2 py-1 rounded">
              {year}
            </div>
          </div>

          {/* Thumbnail images */}
          <div className="p-4 flex space-x-2 overflow-x-auto">
            <img
              src={imageUrl}
              alt={`${brand} ${model} main`}
              className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                activeImage === imageUrl ? 'border-teal-500' : 'border-transparent'
              }`}
              onClick={() => setActiveImage(imageUrl)}
            />
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${brand} ${model} view ${index + 1}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 ${
                  activeImage === img ? 'border-teal-500' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Car details */}
        <div className="md:w-1/2 p-6">
          <h1 className="text-3xl font-bold text-slate-800">
            {brand} {model}
          </h1>
          <p className="text-xl text-slate-600 mt-1">{year}</p>

          <div className="mt-6 text-3xl font-bold text-slate-900">
            ${price.toLocaleString()}
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-slate-500">Color</h3>
                <div className="mt-1 flex items-center">
                  <span
                    className="inline-block w-4 h-4 rounded-full mr-2"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className="text-slate-800">{color}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Horsepower</h3>
                <p className="mt-1 text-slate-800">{horsepower} HP</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Engine</h3>
                <p className="mt-1 text-slate-800">{engine}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Transmission</h3>
                <p className="mt-1 text-slate-800">{transmission}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Fuel Type</h3>
                <p className="mt-1 text-slate-800">{fuelType}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500">Mileage</h3>
                <p className="mt-1 text-slate-800">{mileage.toLocaleString()} miles</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-slate-500">Description</h3>
              <p className="mt-1 text-slate-700">{description}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-slate-300 rounded">
                <button
                  className="px-3 py-1 text-slate-600 hover:bg-slate-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-3 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 text-slate-600 hover:bg-slate-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>

              <button
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
