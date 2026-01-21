import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function MultimediaBottom() {
  const whatsappNumber = "971568145866"; // Add your actual WhatsApp number here (no +)
  const whatsappMessage = "Hello, I'm interested in your multimedia services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  return (
    <section className="bg-green-50 py-20 text-center px-4">
      <h3 className="text-3xl font-bold">
        From Concept to Content Your Multimedia Team Awaits.
      </h3>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Collaborate with expert video editors, animators, designers, and sound
        engineers to bring your creative ideas to life. Reach out today and
        start your multimedia journey with the right talent.
      </p>

      <button
        onClick={() =>
          handleChatClickCustom(
            "Hello, I'm interested in your Multimedia services.",
          )
        }
        className="inline-block bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-6 mt-8 rounded"
      >
        Browse for experts
      </button>
    </section>
  );
}
