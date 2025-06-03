import React, { useState, useEffect } from "react";
import {
  Video,
  Image,
  BarChart2,
  Search,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Video Editors",
    description:
      "Professional editing for social media, ads, and long-form content.",
    icon: <Video className="w-8 h-8 text-green-600" />,
  },
  {
    id: 2,
    title: "Graphic Designers",
    description:
      "Creative visuals, branding, and ad creatives that capture attention.",
    icon: <Image className="w-8 h-8 text-green-600" />,
  },
  {
    id: 3,
    title: "Digital Marketers",
    description:
      "Full-funnel strategies across channels to drive growth and ROI.",
    icon: <BarChart2 className="w-8 h-8 text-green-600" />,
  },
  {
    id: 4,
    title: "SEO Analysts",
    description:
      "Technical audits, keyword research, on-page and off-page optimization.",
    icon: <Search className="w-8 h-8 text-green-600" />,
  },
  {
    id: 5,
    title: "Performance Marketers",
    description:
      "Data-driven ad campaigns on Google, Meta, and other networks.",
    icon: <TrendingUp className="w-8 h-8 text-green-600" />,
  },
  {
    id: 6,
    title: "Social Media Marketers",
    description:
      "Content calendars, community management, and engagement boosts.",
    icon: <Users className="w-8 h-8 text-green-600" />,
  },
  {
    id: 7,
    title: "Web Developers",
    description:
      "Responsive websites, landing pages, and e-commerce solutions.",
    icon: <Code className="w-8 h-8 text-green-600" />,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const phoneNumber = "919633464765";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  const getWhatsAppUrl = () => {
    if (!selectedService) return `https://wa.me/${phoneNumber}`;
    const service = services.find((s) => s.id === selectedService);
    const message = `Hello! I would like to hire a ${service.title}. Please provide more details.`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-black mb-6"
        >
          What You Can{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Hire For
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Access top talent across multiple areas of expertise, ready to help
          your business grow.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {isLoading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 mb-5 rounded-full bg-gray-200" />
                  <div className="w-32 h-4 bg-gray-200 mb-2 rounded" />
                  <div className="w-48 h-3 bg-gray-200 rounded" />
                </div>
              ))
            : services.map((service, index) => (
                <motion.div
                  key={service.id}
                  onClick={() =>
                    setSelectedService(
                      selectedService === service.id ? null : service.id
                    )
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedService(
                        selectedService === service.id ? null : service.id
                      );
                    }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`group cursor-pointer rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                    selectedService === service.id
                      ? "shadow-xl ring-2 ring-green-500"
                      : ""
                  }`}
                >
                  <div className="mb-5 p-4 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    {service.description}
                  </p>
                </motion.div>
              ))}
        </div>

        {selectedService && !isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
              aria-label={`Hire ${
                services.find((s) => s.id === selectedService).title
              } via WhatsApp`}
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              <FaWhatsapp className="text-lg z-10" />
              <span className="z-10">
                Hire {services.find((s) => s.id === selectedService).title}
              </span>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
