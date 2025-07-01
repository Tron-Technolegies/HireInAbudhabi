import React from "react";
import { SearchCheck, FileCheck2, MapPinned, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Done-for-You Matchmaking",
      description:
        "Skip the endless interviews. We send you the best-fit options—fast.",
      icon: <SearchCheck className="w-6 h-6 text-white" />,
      accentColor: "bg-blue-500",
    },
    {
      title: "Zero Hiring Stress",
      description:
        "No contracts, no paperwork, no confusion. You chat with us, we make it happen.",
      icon: <FileCheck2 className="w-6 h-6 text-white" />,
      accentColor: "bg-purple-500",
    },
    {
      title: "Local Expertise",
      description:
        "Marketers who understand the Abu Dhabi market and deliver proven ROI.",
      icon: <MapPinned className="w-6 h-6 text-white" />,
      accentColor: "bg-green-500",
    },
    {
      title: "Flexible & Scalable",
      description:
        "Need help for a campaign or looking to build a long-term team? We've got both.",
      icon: <Users className="w-6 h-6 text-white" />,
      accentColor: "bg-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const phoneNumber = "+971568145866";
  const preFilledMessage =
    "Hi, I'm looking for help with [SMM / SEO / Ads / Content]. Can you assist?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    preFilledMessage
  )}`;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Businesses Love Us
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              Local Talent.{" "}
              <span className="font-medium text-white">Real Results.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700`}
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${benefit.accentColor} flex items-center justify-center shadow-lg`}
              >
                {benefit.icon}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
            <FaWhatsapp className="text-lg z-10" />
            <span className="z-10">Start Hiring with Our Help</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
