import React from 'react'
import { RxFigmaLogo } from "react-icons/rx";

export default function herosection() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen pt-20">
      <RxFigmaLogo className="text-black text-3xl mb-4" />
      <h1 className="text-2xl font-semibold text-black leading-snug">
        Evaluate Your Design & <br /> Development with us.
      </h1>
    </div>
  )
}
