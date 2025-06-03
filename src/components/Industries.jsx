import React from "react";
import {
  Coffee,
  Home,
  ShoppingBag,
  Activity,
  Zap,
  Music,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

const industryIcons = [
  <Coffee className="w-8 h-8 text-white" />,
  <Home className="w-8 h-8 text-white" />,
  <ShoppingBag className="w-8 h-8 text-white" />,
  <Activity className="w-8 h-8 text-white" />,
  <Zap className="w-8 h-8 text-white" />,
  <Music className="w-8 h-8 text-white" />,
  <BookOpen className="w-8 h-8 text-white" />,
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

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Industries() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Industries{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              We Serve Best
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connecting businesses with top marketing talent across key
            industries in Abu Dhabi.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              div::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>

          {industries.map((industry, id) => (
            <div
              key={id}
              className="flex-shrink-0 w-64 snap-center bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-5 ${colors[id]}`}
              >
                {industryIcons[id]}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                {industry}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expert marketing solutions tailored for {industry.toLowerCase()}
                .
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
