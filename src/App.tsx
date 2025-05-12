import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CarListingPage from './pages/CarListingPage';
import CarDetailPage from './pages/CarDetailPage';
import ShoppingCart from './components/cart/ShoppingCart';
import mockCars from './data/mockCars';
import { CartProvider } from './context/CartContext';

const HomePage = () => {
  // Featured cars for the homepage
  const featuredCars = mockCars.slice(0, 3);
  
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=2000" 
            alt="Luxury car" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Luxury Car</h1>
            <p className="text-xl text-neutral-300 mb-8">
              Explore our exclusive collection of high-performance vehicles
            </p>
            <a 
              href="/cars" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-8 rounded-lg text-lg font-medium transition-colors inline-block"
            >
              Browse Cars
            </a>
          </div>
        </div>
      </div>
      
      {/* Featured Cars Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map(car => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href={`/cars/${car.id}`}>
                <div className="relative h-56">
                  <img 
                    src={car.imageUrl} 
                    alt={`${car.brand} ${car.model}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-teal-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {car.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800">{car.brand} {car.model}</h3>
                  <p className="text-slate-600 mt-1">{car.engine}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-2xl font-bold text-slate-900">${car.price.toLocaleString()}</span>
                    <span className="text-slate-600">{car.horsepower} HP</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a 
            href="/cars" 
            className="text-teal-500 hover:text-teal-700 font-medium inline-flex items-center"
          >
            View All Cars
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-neutral-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Premium Selection</h3>
              <p className="text-neutral-600">
                Curated collection of the world's finest luxury and performance vehicles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Fast Delivery</h3>
              <p className="text-neutral-600">
                Quick and efficient delivery process to get you behind the wheel faster.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary-800 mb-2">Quality Guaranteed</h3>
              <p className="text-neutral-600">
                All vehicles undergo rigorous inspection and certification process.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of luxury vehicles and find the perfect match for your lifestyle.
          </p>
          <a 
            href="/cars" 
            className="bg-white text-secondary-600 hover:bg-neutral-100 py-3 px-8 rounded-lg text-lg font-medium transition-colors inline-block"
          >
            Explore Now
          </a>
        </div>
      </div>
    </div>
  );
};

const CartPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <ShoppingCart />
      </div>
    </div>
  );
};

const App = () => {
  console.log('App component rendered');
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cars" element={<CarListingPage />} />
              <Route path="/cars/:id" element={<CarDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </Router>
    </CartProvider>
  );
};

export default App;
