import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="">
       <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/10 backdrop-blur-md shadow-lg text-white dark:bg-gray-900/30 dark:text-white">
        <div className="flex justify-between items-center font-bold">
            <h3 className="text-3xl">YSTAFF</h3>
            <div className="flex items-center">
                <ul className="flex text-lg">
                    <li className="mx-6">
                        <Link to="/" className="cursor-pointer hover:text-xl hover:placeholder:">Dashboard</Link>
                    </li>
                    <li className="mx-6">
                        <Link to="/" className="cursor-pointe  hover:text-xl hover:placeholder:">Product</Link>
                    </li>
                    <li className="mx-6">
                        <Link to="/" className="cursor-pointe  hover:text-xl hover:placeholder:">Pricing</Link>
                    </li>
                    <li className="mx-6">
                        <Link to="/" className="cursor-pointer hover:text-xl hover:placeholder:">Resource</Link>
                    </li>
                    <li className="mx-6">
                        <Link to="/" className="cursor-pointer hover:text-xl hover:placeholder:">Contact Us</Link>
                    </li>
                </ul>
                <button id="toggle-dark"
                    className="ml-5 px-3 py-1 bg-white text-black rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white">
                    Dark Mode</button>
            </div>
        </div>
    </nav>
    </div>
  )
}


