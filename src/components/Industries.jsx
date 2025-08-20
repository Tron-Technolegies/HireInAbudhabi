import React from "react";
import { Coffee, Home, ShoppingBag, Activity, Zap, Music, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const industryIcons = [
  <Coffee className="w-8 h-8 text-white stroke-[1.5]" />,
  <Home className="w-8 h-8 text-white stroke-[1.5]" />,
  <ShoppingBag className="w-8 h-8 text-white stroke-[1.5]" />,
  <Activity className="w-8 h-8 text-white stroke-[1.5]" />,
  <Zap className="w-8 h-8 text-white stroke-[1.5]" />,
  <Music className="w-8 h-8 text-white stroke-[1.5]" />,
  <BookOpen className="w-8 h-8 text-white stroke-[1.5]" />,
];

const industries = [
  "Restaurants & Cafes",
  "Real Estate & Developers",
  "E-commerce & Startups",
  "Healthcare & Clinics",
  "Gyms & Fitness Studios",
  "Events & Entertainment",
  "Education & Training Centers",
];

const colors = [
  "bg-pink-600",
  "bg-indigo-600",
  "bg-yellow-500",
  "bg-green-600",
  "bg-purple-600",
  "bg-red-600",
  "bg-blue-600",
];

export default function Industries() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Industries{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              We Serve Best
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto ">
            Connecting businesses with top marketing talent across key industries in Abu Dhabi.
          </p>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden mb-5 mt-20">
          <div className="flex animate-scroll-x">
            {/* First set */}
            {industries.map((industry, id) => (
              <div
                key={`first-${id}`}
                className="flex-shrink-0 w-64 mx-3 snap-center bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-start"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${colors[id]}`}
                >
                  {industryIcons[id]}
                </div>
                <h3 className="text-white text-center text-lg font-semibold mb-2">{industry}</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Expert marketing solutions tailored for {industry.toLowerCase()}.
                </p>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {industries.map((industry, id) => (
              <div
                key={`second-${id}`}
                className="flex-shrink-0 w-64 mx-3  snap-center bg-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center justify-start"
              >
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-full mb-4 ${colors[id]}`}
                >
                  {industryIcons[id]}
                </div>
                <h3 className="text-white text-center text-lg font-semibold mb-2">{industry}</h3>
                <p className="text-gray-400 text-sm text-center leading-relaxed">
                  Expert marketing solutions tailored for {industry.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll animation style */}
        <style jsx>{`
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll-x {
            display: flex;
            width: max-content;
            animation: scroll-x 40s linear infinite;
          }
          .animate-scroll-x:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}
