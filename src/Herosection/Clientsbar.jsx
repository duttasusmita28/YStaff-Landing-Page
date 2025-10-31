import React from 'react'
import logo1 from "../Herosection/logo1.png";
import logo2 from "../Herosection/logo2.png";
import logo3 from "../Herosection/logo3.png";
import logo4 from "../Herosection/logo4.png";

export default function Clientsbar() {
  return (
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-md p-10 max-w-5xl w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Clients we’ve worked with
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-12">
          <img src={logo1} alt="Client 1" className="h-8 object-contain" />
          <img src={logo2} alt="Client 2" className="h-8 object-contain" />
          <img src={logo3} alt="Client 3" className="h-8 object-contain" />
          <img src={logo4} alt="Client 4" className="h-8 object-contain" />
        </div>
      </div>
  )
}
