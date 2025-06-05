import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Tell Us What You Need",
      description:
        "Struggling with leads? Low engagement? Ads not working? Just WhatsApp us your problem—we'll decode it.",
    },
    {
      title: "We Do the Heavy Lifting",
      description:
        "Our team handpicks marketers from our trusted network based on your goals, industry, and budget.",
    },
    {
      title: "We Connect You",
      description:
        "You approve. We introduce. You grow. Simple, fast, and no wasted time.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
            No browsing. No back-and-forth. Just results.
          </p>

          {/* Underline */}
          <div className="w-32 h-1 sm:w-118 md:w-164 lg:w-180 xl:w-206 mx-auto bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative z-10 group"
            >
              <div
                className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700 group-hover:border-green-400 transition-all duration-300 hover:-translate-y-3"
                style={{ minHeight: "200px" }}
              >
                <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold text-white bg-gray-700 rounded-full">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
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
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          className="mt-20"
        >
          <a
            href="https://wa.me/971568145866?text=Hi%2C%20I'm%20looking%20for%20help%20with%20%5BSMM%20%2F%20SEO%20%2F%20Ads%20%2F%20Content%5D.%20Can%20you%20assist%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
            <FaWhatsapp className="text-lg z-10" />
            <span className="z-10">Let's Get Started</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
