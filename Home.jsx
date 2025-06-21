import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-lime-100">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://miro.medium.com/v2/resize:fit:768/1*-7vKt3iE6NrA3zIJHvAYYA.jpeg"
            alt="Food"
            className="w-full h-auto rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-900 mb-4">Welcome</h1>
          <h3 className="text-2xl md:text-3xl text-sky-600 mb-2">To Ultimate</h3>
          <h2 className="text-2xl md:text-3xl text-yellow-800 mb-4 font-semibold">
            Food Delivery APP - Parul Zomato
          </h2>

          <p className="text-lg text-gray-800 mb-6 italic font-medium">
            "Good Food With Good Mindset" <span role="img" aria-label="plate">🍽️</span>
          </p>
           <Link to="/product">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition duration-300 shadow-md">
              Explore Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;
