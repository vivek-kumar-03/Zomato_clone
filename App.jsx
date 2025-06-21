import React from 'react';
import './App.css';
import Home from './Home';
import Addseller from './Addseller';
import Login from './Login';
import Product from './Product';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      
      <header className="bg-indigo-800 text-white flex justify-between items-center p-4">
      
        <h1 className="text-2xl font-extrabold">🛍️ZomatoMall</h1>

        
        <nav className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/addseller" className="hover:text-gray-300 transition">Add Seller</Link>
          <Link to="/login" className="hover:text-gray-300 transition">Login</Link>
          <Link to="/product" className="hover:text-gray-300 transition">Product</Link>
        </nav>
      </header>

    
      <main className="min-h-screen bg-lime-100 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addseller" element={<Addseller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
