import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "HireInAbuDhabi helped us find the right marketing expert quickly. The impact on our business was immediate and measurable.",
      client: "Managing Director, F&B Group",
      result: "Doubled monthly sales",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
    },
    {
      quote:
        "They understand the nuances of the Abu Dhabi market. We saw significant improvements in engagement and retention.",
      client: "Founder, Private Clinic",
      result: "3x engagement rate",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      quote:
        "Exceptional service and unmatched professionalism. Our campaigns have never been better.",
      client: "Marketing Head, Tech Startup",
      result: "Increased lead generation by 40%",
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
    },
    {
      quote:
        "The local expertise truly sets them apart. They delivered ROI faster than expected.",
      client: "CEO, Retail Chain",
      result: "20% revenue growth",
      photo: "https://randomuser.me/api/portraits/women/50.jpg",
      rating: 4,
    },
    {
      quote:
        "Flexible and scalable solutions tailored to our needs. Highly recommended.",
      client: "Operations Manager, Logistics Firm",
      result: "Streamlined marketing workflow",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Trusted by Leading Businesses
          </h2>
          <p className="text-gray-300 text-lg">
            Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 p-8 rounded-xl shadow-xl text-center"
            >
              <svg
                className="w-8 h-8 text-green-400 mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A5.001 5.001 0 0 0 3 11v4a1 1 0 0 0 1 1h5v-5H6.236a3 3 0 0 1 2.66-4.998A1 1 0 0 0 7.17 6zm10 0A5.001 5.001 0 0 0 13 11v4a1 1 0 0 0 1 1h5v-5h-2.764a3 3 0 0 1 2.66-4.998A1 1 0 0 0 17.17 6z" />
              </svg>
              <blockquote className="text-lg italic text-gray-300 leading-relaxed mb-6">
                “{testimonials[current].quote}”
              </blockquote>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                {testimonials[current].photo && (
                  <img
                    src={testimonials[current].photo}
                    alt={testimonials[current].client}
                    className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
                  />
                )}
                <div className="text-left">
                  <p className="font-semibold text-white">
                    {testimonials[current].client}
                  </p>
                  <p className="text-green-400">
                    {testimonials[current].result}
                  </p>

                  {/* Star rating */}
                  <div className="flex mt-2 text-yellow-400">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 mr-1" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center space-x-6 mt-8">
            <button
              onClick={() =>
                setCurrent(current === 0 ? length - 1 : current - 1)
              }
              aria-label="Previous testimonial"
              className="p-3 rounded-full hover:bg-green-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrent(current === length - 1 ? 0 : current + 1)
              }
              aria-label="Next testimonial"
              className="p-3 rounded-full hover:bg-green-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-gray-500 mt-4">
            Rated <span className="text-gray-300 font-medium">5 stars</span> by
            professionals across industries
          </p>
        </div>
      </div>
    </section>
  );
}
