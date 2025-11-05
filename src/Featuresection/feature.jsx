import { div } from 'framer-motion/client';
import React from 'react'
import { FaUserAlt, FaCalendarCheck, FaTasks, FaChartBar } from "react-icons/fa";

const FeatureData = [
  {
    id: 1,
    title: "Employee Profile",
    desc: "Store and manage complete employee details in one place, including personal information, role and department.",
    icon: <FaUserAlt className="text-blue-400 text-3xl" />,
  },
   {
    id: 2,
    title: "Attendance Tracking",
    desc: "Simplify attendance monitoring with easy check-in/check out logs and automatic report.",
    icon: <FaCalendarCheck className="text-red-400 text-3xl" />,
  },
   {
    id: 3,
    title: "Task Management",
    desc: "Assign, track and manage tasks across teams to keep projects moving shortly.",
    icon: <FaTasks className="text-green-400 text-3xl" />,
  },
   {
    id: 4,
    title: "Reports & Insights",
    desc: "Gain visibility into employee perfomance and company productivity with real-time analytics.",
    icon: <FaChartBar className="text-yellow-400 text-3xl" />,
  },
]

const Featuresection = () => {
  return (
   <section className="relative flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-white py-8 mt-0">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="uppercase font-semibold text-3xl text-gray-800 tracking-wide">
          Feature Section
        </h1>
        <div className="mt-2 h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 w-full max-w-7xl">
        {FeatureData.map((item) => (
          <div
            key={item.id}
            className="bg-white/0 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.1) bg-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:scale-105
            transition-all duration-300 flex flex-col items-center text-center border border-transparent hover:border-blue-300">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex justify-center items-center mb-5">
              {item.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featuresection;