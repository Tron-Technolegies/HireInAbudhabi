import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function AboutBottom() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToServices = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("services");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById("services");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <section className="bg-green-50 py-20 text-center px-4">
      <h3 className="text-3xl font-bold">Smart hiring starts here.</h3>

      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Find the right talent faster with our pre-vetted experts across tech, design, marketing, and
        more. Simplify your hiring process and scale your team with confidence.
      </p>

      <button
        onClick={handleScrollToServices}
        className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 mt-8 rounded"
      >
        Browse for experts
      </button>
    </section>
  );
}
