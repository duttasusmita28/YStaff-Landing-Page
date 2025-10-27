import React from 'react'
import Navbar from './Navbar/navbar'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e4e8ff] via-[#f7f4ff] to-[#e4f4ff] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App
