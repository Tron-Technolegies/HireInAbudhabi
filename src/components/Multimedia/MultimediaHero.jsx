import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MultimediaHero() {
  return (
    <section className="bg-green-50 pt-10 pb-8 px-4">
      <div className="container mx-auto">
        <div className="text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-black">
            Creative Minds at Work Graphic Designers & Video Editors
            <br className="hidden sm:block" /> in Abu Dhabi, UAE
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-2">
            From scroll-stopping graphics to stunning video edits our Graphic Designers & Video
            Editors in Abu Dhabi, UAE. Crafted visuals that elevate your brand with elegance and
            impact.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <a
              href="https://wa.me/971568145866"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              {/* <FaWhatsapp className="text-lg z-10" /> */}
              <span className="z-10">Hire now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
