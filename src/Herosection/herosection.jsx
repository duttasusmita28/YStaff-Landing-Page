import React from 'react'
import { RxFigmaLogo } from "react-icons/rx";
import Joinusbutton from "./Joinusbutton"; 

export default function Herosection() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen pt-1">
      <RxFigmaLogo className="text-black text-3xl mb-3.5" />
      <h1 className="text-5xl font-semibold text-black leading-snug">
        Evaluate Your Design & <br /> Development with us.
      </h1>
      <h3 className='text-lg'>The Yupcha Softwares advances state to use the most recent advances in development <br/> 
      technology and maintain the user at the centre of every design decision.</h3>
      <Joinusbutton/>
    </div>
  )
}
