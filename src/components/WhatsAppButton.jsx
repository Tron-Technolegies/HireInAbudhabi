import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+919633464765";
  const preFilledMessage = encodeURIComponent(
    "Hi, I'm looking for help with [SMM / SEO / Ads / Content]. Can you assist?"
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <a
        href={`https://wa.me/${phoneNumber}?text=${preFilledMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative p-4 rounded-full shadow-xl bg-green-500 text-white flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-gradient-to-tr hover:from-green-500 hover:to-teal-400 hover:ring-4 hover:ring-green-300 hover:scale-105"
      >
        <FaWhatsapp className="w-8 h-8" />

        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us
          <span className="absolute top-1/2 right-0 w-2 h-2 -mr-1 bg-gray-900 transform rotate-45 translate-y-[-50%]"></span>
        </span>
      </a>
    </div>
  );
}
