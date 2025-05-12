// Mock data for car listings
export interface Car {
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

export const carBrands = [
  'Audi', 'BMW', 'Mercedes', 'Porsche', 'Tesla', 'Ferrari', 'Lamborghini', 'Maserati', 'Bentley', 'Rolls-Royce'
];

export const carColors = [
  'Black', 'White', 'Silver', 'Gray', 'Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple'
];

export const fuelTypes = [
  'Gasoline', 'Diesel', 'Electric', 'Hybrid'
];

export const transmissionTypes = [
  'Automatic', 'Manual', 'Semi-Automatic'
];

export const mockCars: Car[] = [
  {
    id: 1,
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: 84100,
    color: 'Blue',
    horsepower: 503,
    engine: '3.0L Twin-Turbo Inline-6',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 1200,
    description: 'The BMW M4 Competition Coupe delivers track-capable performance with everyday usability. With its powerful engine and precise handling, it offers an exhilarating driving experience.',
    imageUrl: 'https://images.unsplash.com/photo-1622942904360-b00e03c4c521?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1696465572249-e3f41f8795eb?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1604838833701-1acdb84b300c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1602017128655-d49205ca94b1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 2,
    brand: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 123600,
    color: 'Silver',
    horsepower: 443,
    engine: '3.0L Twin-Turbo Flat-6',
    transmission: 'Manual',
    fuelType: 'Gasoline',
    mileage: 850,
    description: 'The Porsche 911 Carrera S continues the legacy of the iconic 911 with enhanced performance and technology. Its distinctive design and exceptional engineering make it a timeless sports car.',
    imageUrl: 'https://media.drivingelectric.com/image/private/s--RIExXM3r--/v1597795222/drivingelectric/2020-03/911.jpg',
    images: [
      'https://th.bing.com/th/id/OIP.CPBZ2QfE7b3unnpGviszeAHaEK?w=183&h=104&c=7&bgcl=a53336&r=0&o=6&dpr=1.5&pid=13.1',
      'https://th.bing.com/th/id/OIP.aIWQRiswNLl1BMSVEaBKwQHaD4?w=196&h=104&c=7&bgcl=97ea54&r=0&o=6&dpr=1.5&pid=13.1',
      'https://th.bing.com/th/id/OIP.EXZ-UP4Xi-yFbLz7LOMajgHaFT?rs=1&pid=ImgDetMain'
    ]
  },
  {
    id: 3,
    brand: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 129990,
    color: 'Orange',
    horsepower: 1020,
    engine: 'Tri Motor Electric',
    transmission: 'Automatic',
    fuelType: 'Electric',
    mileage: 320,
    description: 'The Tesla Model S Plaid is the highest performing sedan ever built, with unmatched acceleration, range and efficiency. It represents the pinnacle of electric vehicle technology.',
    imageUrl: 'https://images.unsplash.com/photo-1698514326382-603bb5b273de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    images: [
      'https://images.unsplash.com/photo-1698514340486-cec73815c18d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1698514318453-41de917d2daa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1648786390030-836b0dca7381?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 4,
    brand: 'Mercedes',
    model: 'AMG GT',
    year: 2022,
    price: 118600,
    color: 'Gray',
    horsepower: 523,
    engine: '4.0L Biturbo V8',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 1500,
    description: 'The Mercedes-AMG GT combines breathtaking performance with unmatched luxury. Its handcrafted engine and sophisticated design make it a standout in the high-performance sports car segment.',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1618863099278-75222d755814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1618863114786-d501cae6d853?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1616789916713-386a2b05e0bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 5,
    brand: 'Audi',
    model: 'R8',
    year: 2023,
    price: 158600,
    color: 'Gray',
    horsepower: 562,
    engine: '5.2L V10',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 750,
    description: 'The Audi R8 delivers supercar performance with everyday usability. Its naturally aspirated V10 engine provides an exhilarating soundtrack and blistering acceleration.',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800',
    images: [
      'https://images.unsplash.com/photo-1536150794560-43f988aec18e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1536150693014-2ef8bff55514?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1618265585661-4aeda328bfb3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  },
  {
    id: 6,
    brand: 'Ferrari',
    model: '296 GTB',
    year: 2023,
    price: 321400,
    color: 'Yellow',
    horsepower: 819,
    engine: '3.0L Twin-Turbo V6 Hybrid',
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    mileage: 200,
    description: 'The Ferrari 296 GTB represents a revolution in Ferrari history, combining a V6 engine with hybrid technology to deliver unprecedented performance and efficiency.',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-296gtb-152-65df994a5ca09.jpg?crop=1xw:1xh;center,top&resize=980:*',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-296gtb-154-65df994b53e0d.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-296gtb-108-65df992d408b3.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2022-ferrari-296gtb-129-65df993bd42fa.jpg?crop=1xw:1xh;center,top&resize=980:*'
    ]
  },
  {
    id: 7,
    brand: 'Lamborghini',
    model: 'Huracan Evo',
    year: 2023,
    price: 267600,
    color: 'Silver',
    horsepower: 631,
    engine: '5.2L V10',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 350,
    description: 'The Lamborghini Huracan Evo is the evolution of the most successful V10-powered Lamborghini ever. It features advanced vehicle dynamics control and aerodynamics for unmatched performance.',
    imageUrl: 'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/906000/400/906484.jpg?q=50&fit=crop&w=1150&h=650&dpr=1.5',
    images: [
      'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/906000/400/906478.jpg?q=50&fit=crop&w=1150&h=650&dpr=1.5',
      'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/906000/400/906483.jpg?q=50&fit=crop&w=1150&h=650&dpr=1.5',
      'https://static0.carbuzzimages.com/wordpress/wp-content/uploads/gallery-images/original/906000/400/906475.jpg?q=50&fit=crop&w=1150&h=650&dpr=1.5'
    ]
  },
  {
    id: 8,
    brand: 'Bentley',
    model: 'Continental GT',
    year: 2023,
    price: 202500,
    color: 'White',
    horsepower: 626,
    engine: '6.0L Twin-Turbo W12',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 980,
    description: 'The Bentley Continental GT combines extraordinary performance with handcrafted luxury and cutting-edge technology. It represents the pinnacle of grand touring.',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2023-bentley-continental-gt-s-coupe-101-1654526518.jpg?crop=1xw:1xh;center,top&resize=980:*',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/2023-bentley-continental-gt-s-coupe-103-1654526521.jpg?crop=1.00xw:0.753xh;0,0.0440xh&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2023-bentley-continental-gt-s-coupe-102-1654526520.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2023-bentley-continental-gt-s-coupe-106-1654526524.jpg?crop=1xw:1xh;center,top&resize=980:*'
    ]
  },
  {
    id: 9,
    brand: 'Maserati',
    model: 'MC20',
    year: 2023,
    price: 215995,
    color: 'Blue',
    horsepower: 621,
    engine: '3.0L Twin-Turbo V6',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 420,
    description: 'The Maserati MC20 marks the beginning of a new era for the Italian brand. Its innovative engine, carbon fiber chassis, and striking design make it a true supercar.',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2023-maserati-mc20-cielo-spyder-102-1653402017.jpg?crop=1xw:1xh;center,top&resize=980:*',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/2023-maserati-mc20-cielo-spyder-114-1653401845.jpg?crop=1.00xw:0.752xh;0,0.168xh&resize=1200:*',
      'https://hips.hearstapps.com/hmg-prod/images/2023-maserati-mc20-cielo-primaserie-spyder-101-1653401842.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2023-maserati-mc20-cielo-spyder-105-1653401840.jpg?crop=1xw:1xh;center,top&resize=980:*'
    ]
  },
  {
    id: 10,
    brand: 'Rolls-Royce',
    model: 'Ghost',
    year: 2023,
    price: 343000,
    color: 'Black',
    horsepower: 563,
    engine: '6.75L Twin-Turbo V12',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    mileage: 650,
    description: 'The Rolls-Royce Ghost is the most technologically advanced Rolls-Royce ever created. It offers a perfect balance of comfort, luxury, and dynamic performance.',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-02-1638754172.jpg?crop=1xw:1xh;center,top&resize=980:*',
    images: [
      'https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-07-1638754190.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-08-1638754195.jpg?crop=1xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/2022-rolls-royce-ghost-black-badge-13-1638754199.jpg?crop=1xw:1xh;center,top&resize=980:*'
    ]
  }
];

export default mockCars;
