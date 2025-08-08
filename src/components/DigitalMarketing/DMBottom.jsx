import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function DMBottom() {
  const whatsappNumber = "971568145866"; // Replace with your actual number (without +)

  const whatsappMessage = "Hello, I'm interested in your digital marketing services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section className="bg-green-50 py-20 text-center px-4">
      <h3 className="text-3xl font-bold">Plug in the brilliance your brand’s been waiting for.</h3>

      <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
        Unlock the full potential of your business with our expert digital marketing services
        tailored for your unique goals. Reach your audience effectively and grow faster.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 mt-8 rounded"
      >
        Browse for Experts
      </a>
    </section>
  );
}
