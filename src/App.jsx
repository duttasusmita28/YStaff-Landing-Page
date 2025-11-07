import React from 'react'
import Navbar from './Navbar/navbar'
import Herosection from './Herosection/herosection'
import { BrowserRouter } from 'react-router-dom';
import Featuresection from './Featuresection/feature'
import Bannersection from './Bannersection/whyystaff'

function App() {
  return (
      <BrowserRouter>
      <div className="min-h-screen bg-linear-to-b from-indigo-50 via-purple-50 to-pink-50">
      <Navbar/>
      <Herosection/>
      <Featuresection/>
      <Bannersection/>
      </div>
      </BrowserRouter>
  )
}

export default App
