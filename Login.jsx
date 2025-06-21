import React from 'react';

function Login() {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <form className="p-8 rounded-lg shadow-md w-full max-w-sm bg-indigo-400 ">
        <h2 className="text-center text-3xl font-bold mb-6 text-indigo-700">Welcome Back</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <label className="flex items-center space-x-2 text-gray-600">
            <input type="checkbox" className="h-4 w-4" />
            <span>Remember Me</span>
          </label>
          <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
