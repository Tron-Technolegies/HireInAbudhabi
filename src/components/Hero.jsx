import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center overflow-hidden py-16">
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Need a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Marketing Expert
            </span>{" "}
            in Abu Dhabi?
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Social media managers, ad specialists, SEO pros & content
            creators—all pre-vetted and ready to grow your business.
          </p>

          <button
            title="Contact-Now"
            className="flex justify-center lg:justify-start"
          >
            <a
              href="https://wa.me/971568145866"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              <FaWhatsapp className="text-lg z-10" />
              <span className="z-10">Talk To An Expert</span>
            </a>
          </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 order-2 lg:order-2 mt-8 lg:mt-0"
        >
          <div className="relative mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src="https://cdn.prod.website-files.com/5ec70e2719e95acb889006a3/67f576f510f6e2f15a80e8c9_hero%20marketer%20card%202%20(1).webp"
              alt="Marketing Experts"
              className="w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
