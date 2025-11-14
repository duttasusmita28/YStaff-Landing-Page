import React, { useState } from "react"
import Project1 from "./Project1.jpg";
import Project2 from "./Project2.jpg";
import Project3 from "./Project3.jpg";
import Project4 from "./Project4.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectData = [
    {
    id: 1,
    title: "Travel Website Design",
    desc: "Lorem ipsum duis habitasse mauris fermentum id fermentum sagittis metus sed donec.",
    image: Project1
  },
  {
    id: 2,
    title: "Real Estate Website Design",
    desc: "Lorem ipsum duis habitasse mauris fermentum id fermentum sagittis metus sed donec.",
    image: Project2,
  },
  {
    id: 3,
    title: "E-Commerce Website Design",
    desc: "Lorem ipsum duis habitasse mauris fermentum id fermentum sagittis metus sed donec.",
    image: Project3,
  },
  {
    id: 4,
    title: "Portfolio Website Design",
    desc: "Lorem ipsum duis habitasse mauris fermentum id fermentum sagittis metus sed donec.",
    image: Project4,
  },
];

export default function Projectsliders() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % ProjectData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + ProjectData.length) % ProjectData.length);
  };

  return (
    <section className="w-full bg-linear-to-br from-white to-blue-50 py-14 rounded-[40px] mt-7">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3">Check Our Works</h2>
          <p className="text-gray-950 text-lg">
            We craft modern digital experiences blending design & functionality.
          </p>
        </div>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-8 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition "
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Animated Slide */}
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={ProjectData[index].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={ProjectData[index].image}
                  alt={ProjectData[index].title}
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-8 left-8 text-left">
                  <h3 className="text-2xl text-white font-semibold mb-2">
                    {ProjectData[index].title}
                  </h3>
                  <p className="text-gray-300 max-w-md">{ProjectData[index].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-8 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {ProjectData.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-500"
              } transition-all duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}



