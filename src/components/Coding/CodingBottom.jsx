import React from "react";

export default function CodingBottom() {
  const whatsappNumber = "971568145866";
  const whatsappMessage = "Hello, I'm interested in your Coding services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;
  return (
    <section className="bg-green-50 py-20 text-center px-4">
      <h3 className="text-3xl font-bold">Excellence in every line of code start with the best.</h3>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Discover top-tier developers who deliver clean, efficient, and scalable code tailored to
        your project needs. From frontend finesse to backend brilliance, find your perfect tech
        match.
      </p>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 mt-8 rounded"
      >
        Browse for experts
      </a>
    </section>
  );
}
