import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CarDetail from '../components/cars/CarDetail';
import mockCars from '../data/mockCars';
import { useCart } from '../context/CartContext';
import { Car } from '../data/mockCars';

const CarDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const carId = parseInt(id || '1');
  const { dispatch } = useCart();

  const handleAddToCart = (car: Car) => {
    dispatch({ type: 'ADD_TO_CART', payload: car });
    const toastId = toast(
      <div>
        Added to cart! <button onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: car.id }); toast.dismiss(toastId); }}>Undo</button>
      </div>,
      { autoClose: 5000 }
    );
  };

  // Find the car with the matching ID
  const car = mockCars.find(car => car.id === carId);
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Car Not Found</h1>
        <p className="text-slate-600 mb-8">The car you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/cars" 
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition-colors"
        >
          Browse All Cars
        </Link>
      </div>
    );
  }
  
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link 
            to="/cars" 
            className="text-teal-500 hover:text-teal-700 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Cars
          </Link>
        </div>
        
        <CarDetail 
          id={car.id}
          brand={car.brand}
          model={car.model}
          year={car.year}
          price={car.price}
          color={car.color}
          horsepower={car.horsepower}
          engine={car.engine}
          transmission={car.transmission}
          fuelType={car.fuelType}
          mileage={car.mileage}
          description={car.description}
          imageUrl={car.imageUrl}
          images={car.images}
        />
        <button 
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg mt-4"
          onClick={() => handleAddToCart(car)}
        >
          Add to Cart
        </button>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Similar Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockCars
              .filter(c => c.id !== car.id && (c.brand === car.brand || c.price > car.price * 0.8 && c.price < car.price * 1.2))
              .slice(0, 3)
              .map(similarCar => (
                <div key={similarCar.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/cars/${similarCar.id}`}>
                    <img 
                      src={similarCar.imageUrl} 
                      alt={`${similarCar.brand} ${similarCar.model}`} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-slate-800">{similarCar.brand} {similarCar.model}</h3>
                      <p className="text-slate-600">{similarCar.year}</p>
                      <p className="mt-2 text-xl font-bold text-slate-900">${similarCar.price.toLocaleString()}</p>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
