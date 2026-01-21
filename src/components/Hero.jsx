import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { handleChatClick } from "../utils/whatsapp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center overflow-hidden py-16"
    >
      {/* Background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center w-full"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left order-1 mb-10 lg:mb-0 lg:pr-10">
          {/* <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider text-green-400 uppercase bg-green-900 bg-opacity-30 rounded-full mb-4">
            Expert Matching Service
          </span> */}

          <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold leading-tight mb-4">
            Hire vetted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Digital Marketing, Coding, and Multimedia
            </span>{" "}
            Experts in Abu Dhabi,UAE
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            From scalable code to converting campaigns and visuals that engage,
            We select the best who transform your idea into actionable success.
            Build better, go faster, with trusted experts .
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleChatClick}
              title="Contact-Now"
              className="relative cursor-pointer inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              <FaWhatsapp className="text-lg z-10" />
              <span className="z-10">Hire now</span>
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0"
        >
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="/Hero-img.webp"
              alt="Team profiles featuring Nahala, Digital Marketing Specialist; Shafi, MERN Stack Developer; and Faheem, Multimedia Specialist | IT Outsourcing Company in Abu Dhabi, UAE"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
