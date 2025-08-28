import React from "react";
import { motion } from "framer-motion";
import { Users, Zap, TrendingUp, Target } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function WhyChooseInHowItWorks() {
  const features = [
    {
      icon: Users,
      text: "Employ remote workers or local freelancers",
      color: "from-blue-500 to-blue-500",
    },
    {
      icon: Zap,
      text: "Skip lengthy agreements",
      color: "from-blue-500 to-blue-500",
    },
    {
      icon: TrendingUp,
      text: "Grow your team at your own pace",
      color: "from-blue-500 to-blue-500",
    },
    {
      icon: Target,
      text: "Have complete command over communication and work output",
      color: "from-blue-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const navigate = useNavigate();
  const location = useLocation();

  // inline scroll-to-section function
  const handleScrollToSection = (id) => {
    if (location.pathname === "/") {
      // already on homepage → just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // navigate to homepage → then scroll
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center  mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl  font-bold text-black mb-2 leading-tight">
            Why It's Better Than Conventional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600">
              BPO Outsourcing providers in Abu dhabi
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            In contrast to conventional <Link to="/">BPO outsourcing providers in Dubai</Link>, we
            allow you to:
          </p>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gray-50 hover:bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                  <div className="relative flex items-start space-x-4">
                    {/* Icon container with gradient */}
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Text content */}
                    <div className="flex-1 pt-1">
                      <p className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>

                  {/* Subtle glow effect */}
                  {/* <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  ></div> */}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            className="text-lg text-gray-700 text-center mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Whether you need <Link to="/">remote staffing solutions</Link> or professional freelance
            assistance in Abu Dhabi we make it easier.
          </motion.p>

          {/* CTA Button */}
          <div className="text-center">
            <motion.button
              onClick={() => handleScrollToSection("services")}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-full hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Browse for experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
