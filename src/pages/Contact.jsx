import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Contact Us
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Need a marketing expert in Abu Dhabi? Let’s connect!
        </p>

        <div className="mt-8 space-y-6">
          <p className="text-lg text-gray-700">
            📍 Address: 123 Business Street, Abu Dhabi, UAE
          </p>
          <p className="text-lg text-gray-700">
            ✉️ Email:{" "}
            <a
              href="mailto:info@hireinabudhabi.com"
              className="text-green-600 hover:underline"
            >
              info@hireinabudhabi.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            📞 Phone:{" "}
            <a
              href="tel:+971123456789"
              className="text-green-600 hover:underline"
            >
              +971 56 814 5866
            </a>
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="http://Wa.me/971568145866"
          className="mt-8 inline-block bg-green-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition duration-300"
        >
          Message Us Now – Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
