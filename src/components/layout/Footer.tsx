import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary-400">LuxuryCars</h3>
            <p className="text-neutral-300">
              Your premier destination for luxury and performance vehicles.
              Explore our extensive collection of premium cars.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-neutral-300 hover:text-secondary-300 transition-colors">Home</a></li>
              <li><a href="/cars" className="text-neutral-300 hover:text-secondary-300 transition-colors">Browse Cars</a></li>
              <li><a href="/cart" className="text-neutral-300 hover:text-secondary-300 transition-colors">Shopping Cart</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary-400">Contact</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@luxurycars.example.com
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-secondary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                123 Luxury Lane, Beverly Hills, CA 90210
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-6 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} LuxuryCars. All rights reserved.</p>
          <p className="mt-2 text-sm">This is a portfolio project for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
