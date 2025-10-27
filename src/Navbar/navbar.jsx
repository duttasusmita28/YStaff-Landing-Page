import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4e8ff] via-[#f7f4ff] to-[#e4f4ff] flex flex-col items-center justify-center">
       <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 bg-purple-300 text-white dark:bg-gray-900 dark:text-white">
        <div className="flex justify-between items-center font-bold">
            <h3 className=" text-white text-3xl">YSTAFF</h3>
            <div className="flex items-center">
                <ul className="flex text-xl decoration-amber-50">
                    <li className="mx-5">
                        <Link to="/" className="cursor-pointer hover:text-2xl hover:placeholder:">Dashboard</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/" className="cursor-pointe  hover:text-2xl hover:placeholder:">Product</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/" className="cursor-pointe  hover:text-2xl hover:placeholder:">Pricing</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/" className="cursor-pointer hover:text-2xl hover:placeholder:">Resource</Link>
                    </li>
                    <li className="mx-5">
                        <Link to="/" className="cursor-pointer hover:text-2xl hover:placeholder:">Contact Us</Link>
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


