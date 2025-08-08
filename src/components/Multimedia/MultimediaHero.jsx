import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function MultimediaHero() {
  return (
    <section className=" bg-green-50 pt-20 pb-13">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center leading-tight text-black">
            Creative Minds at Work {""}
            Graphic Designers & Video Editors
            <br /> in Abu Dhabi, UAE
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-gray-600 leading-relaxed">
            From scroll-stopping graphics to stunning video edits our Graphic Designers & Video
            Editors in <br />
            Abu Dhabi,UAE. Crafted visuals that elevate your brand with elegance and impact
          </p>

          <div className="flex justify-center ">
            <button title="Contact-Now" className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/971568145866"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
                {/* <FaWhatsapp className="text-lg z-10" /> */}
                <span className="z-10">Hire now</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
