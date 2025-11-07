import React from 'react'
import Img1 from "./Banner.png";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";

const BannerData = [
    {
        image: Img1,
        title: "Why YStaff ?",
        desc: "Managing employees shouldn’t be complicated. YStaff Brings everything together into one single platform.",
        points: [
      "Centralized Data",
      "Error Reduction",
      "Boosted Productivity",
      "Scalable",
      "Easy Adoption",
    ],
    }
]

export default function whyystaff() {
const {image, title, desc, points } = BannerData[0];

  return (
    <div className="w-full bg-linear-to-br from-white to-blue-50 py-14 rounded-[40px] mt-7">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* banner image section */}
                <motion.div 
                 initial={{opacity:0, translateX:"-100%"}}
                 whileInView={{opacity:1, translateX:0}}
                 transition={{duration:2}}
                className={"flex justify-center md:justify-start "} >
                    <img src={image} alt="" className='w-[400px] h-auto object-cover drop-shadow-xl rounded-xl hover:scale-105 transition-all duration-500'/>
                </motion.div>
                {/* banner text section */}
                <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]'>
                    <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
                    <ul className='space-y-4'>
                        {points.map((points, index) => (
                            <li key={index} className="flex items-center text-gray-700 gap-3">
                                <FaCheckCircle className="text-blue-600 text-xl" />
                                <span className="text-lg">{points}</span>
                            </li>
                        ))}
                    </ul>
                     <button className="mt-4 px-8 py-3 bg-blue-600 text-shadow-black rounded-full text-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all">
              Learn More
            </button>
                </div>
            </div>
        </div>
      
    </div>
  )
}
