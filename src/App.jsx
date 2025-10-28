import React from 'react'
import Navbar from './Navbar/navbar'
import Herosection from './Herosection/herosection'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <div className="">
      <Navbar/>
      <Herosection/>
      </div>
      </BrowserRouter>
  )
}

export default App
