import React from 'react';

function Contact() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-indigo-400 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-indigo-800 mb-6">📦 Add New Seller</h1>
        
        <form>
          <div className="space-y-4">

            <div>
              <label htmlFor="sellerName" className="block text-gray-700 font-medium mb-1">Seller Name</label>
              <input
                type="text"
                name="sellerName"
                id="sellerName"
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="sellerEmail" className="block text-gray-700 font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="sellerEmail"
                id="sellerEmail"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="shopName" className="block text-gray-700 font-medium mb-1">Shop Name</label>
              <input
                type="text"
                name="shopName"
                id="shopName"
                placeholder="e.g., Vivek Kirana Store"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="0000000000"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="shopAddress" className="block text-gray-700 font-medium mb-1">Shop Address</label>
              <input
                type="text"
                name="shopAddress"
                id="shopAddress"
                placeholder="Enter your shop address"
                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
              >
                ✅ Add Seller
              </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
