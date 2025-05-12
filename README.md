# Luxury Car Shopping Website

A modern car shopping website built with React.js and Tailwind CSS, advanced filtering, and shopping cart functionality.

## Features

- **Modern UI/UX Design**: Clean, responsive interface with a premium color palette suitable for luxury car shopping
- **Advanced Filtering**: Filter cars by brand, year, color, horsepower, price, and more
- **Shopping Cart**: Fully functional shopping cart with React Context API for state management
- **Responsive Design**: Optimized for all device sizes from mobile to desktop

## Technologies Used

- **React.js**: Component-based UI architecture
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **TypeScript**: Type-safe JavaScript

## Project Structure

```
car-shop/
├── src/
│   ├── components/
│   │   ├── cars/          # Car-related components
│   │   ├── cart/          # Shopping cart components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/            # Reusable UI components
│   ├── context/           # React Context for state management
│   ├── data/              # Mock data for cars
│   ├── pages/             # Page components
│   └── styles/            # Global styles and color palette
├── public/                # Static assets
└── README.md              # Project documentation
```

## Key Components

- **CarViewer3D**: Renders interactive 3D car models with orbit controls
- **CarCard**: Displays car information in a card format for listings
- **CarDetail**: Shows detailed information about a specific car
- **ShoppingCart**: Manages the shopping cart functionality
- **FilterSection**: Provides filtering options for car listings

## Color Palette

The website uses a modern color palette designed for luxury car shopping:

- **Primary**: Blue tones for main branding and UI elements
- **Secondary**: Teal tones for accents and call-to-action buttons
- **Neutral**: Slate tones for backgrounds and text

## Getting Started

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Start the development server: `pnpm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Future Improvements

- Fix TypeScript errors in 3D model components
- Add user authentication
- Implement backend integration for real data
- Add payment processing
- Enhance 3D models with realistic car models
- Add car comparison feature

## Portfolio Project

This project was created as a portfolio piece to demonstrate front-end development skills, particularly in React.js, Tailwind CSS, and 3D visualization. It showcases the ability to create a modern, responsive e-commerce website with advanced features.
