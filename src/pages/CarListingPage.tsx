import React, { useState, useEffect } from 'react';

import CarCard from '../components/cars/CarCard';
import mockCars, { Car, carBrands, carColors, fuelTypes, transmissionTypes } from '../data/mockCars';

// Filter component for car attributes
const FilterSection = ({ 
  title, 
  options, 
  selectedValues, 
  onChange 
}: {
  title: string;
  options: string[];
  selectedValues: string[];
  onChange: (values: string[]) => void;
}) => {
  const handleChange = (option: string) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter(item => item !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map(option => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={`${title}-${option}`}
              checked={selectedValues.includes(option)}
              onChange={() => handleChange(option)}
              className="h-4 w-4 text-teal-500 focus:ring-teal-400 border-slate-300 rounded"
            />
            <label htmlFor={`${title}-${option}`} className="ml-2 text-slate-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

// Range filter component for numeric values
const RangeFilterSection = ({ 
  title, 
  min, 
  max, 
  step,
  value, 
  onChange,
  formatValue = (val: number) => val.toString()
}: {
  title: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  formatValue?: (val: number) => string;
}) => {
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(e.target.value);
    onChange([newMin, value[1]]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(e.target.value);
    onChange([value[0], newMax]);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-slate-800 mb-3">{title}</h3>
      <div className="flex justify-between mb-2">
        <span className="text-slate-700">{formatValue(value[0])}</span>
        <span className="text-slate-700">{formatValue(value[1])}</span>
      </div>
      <div className="flex space-x-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[0]}
          onChange={handleMinChange}
          className="w-full"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={handleMaxChange}
          className="w-full"
        />
      </div>
    </div>
  );
};

// Main car listing page component
const CarListingPage = () => {
  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedFuelTypes, setSelectedFuelTypes] = useState<string[]>([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<[number, number]>([2020, 2023]);
  const [priceRange, setPriceRange] = useState<[number, number]>([50000, 350000]);
  const [horsepowerRange, setHorsepowerRange] = useState<[number, number]>([400, 1100]);
  
  // Search and sort states
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-asc');
  
  // Mobile filter visibility state
  const [showFilters, setShowFilters] = useState(false);
  
  // Filtered cars state
  const [filteredCars, setFilteredCars] = useState<Car[]>(mockCars);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...mockCars];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(car => 
        car.brand.toLowerCase().includes(query) || 
        car.model.toLowerCase().includes(query)
      );
    }
    
    // Apply brand filter
    if (selectedBrands.length > 0) {
      result = result.filter(car => selectedBrands.includes(car.brand));
    }
    
    // Apply color filter
    if (selectedColors.length > 0) {
      result = result.filter(car => selectedColors.includes(car.color));
    }
    
    // Apply fuel type filter
    if (selectedFuelTypes.length > 0) {
      result = result.filter(car => selectedFuelTypes.includes(car.fuelType));
    }
    
    // Apply transmission filter
    if (selectedTransmissions.length > 0) {
      result = result.filter(car => selectedTransmissions.includes(car.transmission));
    }
    
    // Apply year range filter
    result = result.filter(car => 
      car.year >= yearRange[0] && car.year <= yearRange[1]
    );
    
    // Apply price range filter
    result = result.filter(car => 
      car.price >= priceRange[0] && car.price <= priceRange[1]
    );
    
    // Apply horsepower range filter
    result = result.filter(car => 
      car.horsepower >= horsepowerRange[0] && car.horsepower <= horsepowerRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'horsepower-desc':
        result.sort((a, b) => b.horsepower - a.horsepower);
        break;
      default:
        break;
    }
    
    setFilteredCars(result);
  }, [
    searchQuery, 
    selectedBrands, 
    selectedColors, 
    selectedFuelTypes, 
    selectedTransmissions, 
    yearRange, 
    priceRange, 
    horsepowerRange, 
    sortBy
  ]);
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedFuelTypes([]);
    setSelectedTransmissions([]);
    setYearRange([2020, 2023]);
    setPriceRange([50000, 350000]);
    setHorsepowerRange([400, 1100]);
    setSearchQuery('');
    setSortBy('price-asc');
  };
  
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Browse Luxury Cars</h1>
        <p className="text-slate-600 mb-8">Find your dream car with our extensive collection</p>
        
        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0 md:w-1/2 md:mr-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by brand or model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2 text-slate-700">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Newest First</option>
              <option value="horsepower-desc">Highest Horsepower</option>
            </select>
          </div>
        </div>
        
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 md:pr-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-800">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-teal-500 hover:text-teal-700 text-sm font-medium"
                >
                  Reset All
                </button>
              </div>
              
              <FilterSection
                title="Brand"
                options={carBrands}
                selectedValues={selectedBrands}
                onChange={setSelectedBrands}
              />
              
              <FilterSection
                title="Color"
                options={carColors}
                selectedValues={selectedColors}
                onChange={setSelectedColors}
              />
              
              <FilterSection
                title="Fuel Type"
                options={fuelTypes}
                selectedValues={selectedFuelTypes}
                onChange={setSelectedFuelTypes}
              />
              
              <FilterSection
                title="Transmission"
                options={transmissionTypes}
                selectedValues={selectedTransmissions}
                onChange={setSelectedTransmissions}
              />
              
              <RangeFilterSection
                title="Year"
                min={2020}
                max={2023}
                step={1}
                value={yearRange}
                onChange={setYearRange}
              />
              
              <RangeFilterSection
                title="Price ($)"
                min={50000}
                max={350000}
                step={10000}
                value={priceRange}
                onChange={setPriceRange}
                formatValue={(val) => `$${val.toLocaleString()}`}
              />
              
              <RangeFilterSection
                title="Horsepower"
                min={400}
                max={1100}
                step={50}
                value={horsepowerRange}
                onChange={setHorsepowerRange}
                formatValue={(val) => `${val} HP`}
              />
            </div>
          </div>
          
          {/* Car Listings */}
          <div className="md:w-3/4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-bold text-slate-800">
                  {filteredCars.length} {filteredCars.length === 1 ? 'Car' : 'Cars'} Found
                </h2>
              </div>
              
              {filteredCars.length === 0 ? (
                <div className="text-center py-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  <p className="mt-4 text-slate-600">No cars match your filters</p>
                  <button
                    onClick={resetFilters}
                    className="mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCars.map(car => (
                    <CarCard
                      key={car.id}
                      id={car.id}
                      brand={car.brand}
                      model={car.model}
                      year={car.year}
                      price={car.price}
                      color={car.color}
                      horsepower={car.horsepower}
                      imageUrl={car.imageUrl}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarListingPage;
