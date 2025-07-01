import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function RealGrowth() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-12 bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl text-center">
        <h2 className="text-4xl font-extrabold leading-snug mb-4">
          Real Marketing Strategies. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Real Business Growth.
          </span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          We don’t just create campaigns — we deliver results. Our proven
          frameworks are tailored to help you grow consistently, backed by data
          and strategy.
        </p>
        <div className="mt-8">
          <a
            href="https://wa.me/971568145866?text=Hi%2C%20I'm%20looking%20for%20help%20with%20%5BSMM%20%2F%20SEO%20%2F%20Ads%20%2F%20Content%5D.%20Can%20you%20assist%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
            <FaWhatsapp className="text-lg z-10" />
            <span className="z-10">Start Hiring with Our Help</span>
          </a>
        </div>
      </div>
    </section>
  );
}
