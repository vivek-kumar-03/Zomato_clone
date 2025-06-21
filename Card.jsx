import React from 'react';

function Card({ Imageurl, dishname, hotelname, buttontext }) {
  return (
    <div className="w-[200px] h-[300px] border rounded-lg overflow-hidden shadow-lg ">
      <img src={Imageurl} alt={dishname} className="w-full h-36 object-cover" />
      <div className="p-2 text-center">
        <p className="font-semibold text-lg">{dishname}</p>
        <p className="text-gray-500 text-sm">{hotelname}</p>
        <button className="mt-2 bg-amber-600 text-white px-3 py-1 rounded hover:bg-amber-700 transition">
          {buttontext}
        </button>
      </div>
    </div>
  );
}

export default Card;
