// import React, { useState, useEffect } from "react";
// import { Video, Image, BarChart2, Search, TrendingUp, Users, Code } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// // Updated service categories
// const serviceTabs = {
//   "Digital Marketing": [
//     {
//       id: 1,
//       title: "SEO Experts",
//       description: "Boost your website's visibility with proven SEO strategies.",
//       icon: <Search className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 2,
//       title: "Social Media Managers",
//       description: "Engage your audience with planned content and strategy.",
//       icon: <Users className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 3,
//       title: "Performance Marketers",
//       description: "Data-driven campaigns to increase your ROI.",
//       icon: <TrendingUp className="w-8 h-8 text-green-600" />,
//     },
//   ],
//   Coding: [
//     {
//       id: 4,
//       title: "Frontend Developers",
//       description: "Responsive and modern interfaces using React, Vue, or Angular.",
//       icon: <Code className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 5,
//       title: "Backend Developers",
//       description: "Scalable APIs and systems with Node.js, Laravel, or Django.",
//       icon: <Code className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 6,
//       title: "Fullstack Developers",
//       description: "Complete web solutions from UI to database.",
//       icon: <Code className="w-8 h-8 text-green-600" />,
//     },
//   ],
//   Multimedia: [
//     {
//       id: 7,
//       title: "Video Editors",
//       description: "Polished edits for reels, ads, and YouTube content.",
//       icon: <Video className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 8,
//       title: "Graphic Designers",
//       description: "Branding, social posts, thumbnails & more.",
//       icon: <Image className="w-8 h-8 text-green-600" />,
//     },
//     {
//       id: 9,
//       title: "Animators",
//       description: "2D/3D animations that grab attention and tell stories.",
//       icon: <Video className="w-8 h-8 text-green-600" />,
//     },
//   ],
// };

// export default function Services() {
//   const [selectedService, setSelectedService] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [selectedTab, setSelectedTab] = useState("Digital Marketing");

//   const phoneNumber = "+971568145866";

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   const getWhatsAppUrl = () => {
//     if (!selectedService) return `https://wa.me/${phoneNumber}`;
//     const service = serviceTabs[selectedTab].find((s) => s.id === selectedService);
//     const message = `Hello! I would like to discuss about "${service.title}". Please provide more details.`;
//     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-extrabold text-black mb-6"
//         >
//           Expand Your Team with the{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
//             Right Experts
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-gray-600 max-w-2xl mx-auto mb-6"
//         >
//           Hire skilled professionals in Digital Marketing, Coding, and Multimedia — customized to
//           help you reach your business goals.
//         </motion.p>

//         <div className="flex justify-center gap-4 mb-10 flex-wrap">
//           {["Digital Marketing", "Coding", "Multimedia"].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => {
//                 setSelectedTab(tab);
//                 setSelectedService(null);
//               }}
//               className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
//                 selectedTab === tab
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-100 text-gray-700 hover:bg-green-100"
//               }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {isLoading
//             ? Array.from({ length: 3 }).map((_, idx) => (
//                 <div
//                   key={idx}
//                   className="animate-pulse rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center"
//                 >
//                   <div className="w-14 h-14 mb-5 rounded-full bg-gray-200" />
//                   <div className="w-32 h-4 bg-gray-200 mb-2 rounded" />
//                   <div className="w-48 h-3 bg-gray-200 rounded" />
//                 </div>
//               ))
//             : serviceTabs[selectedTab].map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   onClick={() =>
//                     setSelectedService(selectedService === service.id ? null : service.id)
//                   }
//                   role="button"
//                   tabIndex={0}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" || e.key === " ") {
//                       setSelectedService(selectedService === service.id ? null : service.id);
//                     }
//                   }}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className={`group cursor-pointer rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
//                     selectedService === service.id ? "shadow-xl ring-2 ring-green-500" : ""
//                   }`}
//                 >
//                   <div className="mb-5 p-4 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
//                     {service.description}
//                   </p>
//                 </motion.div>
//               ))}
//         </div>

//         {selectedService && !isLoading && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-12 text-center"
//           >
//             <a
//               href={getWhatsAppUrl()}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
//               aria-label={`Hire ${
//                 serviceTabs[selectedTab].find((s) => s.id === selectedService)?.title
//               } via WhatsApp`}
//             >
//               <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
//               <FaWhatsapp className="text-lg z-10" />
//               <span className="z-10">
//                 Hire {serviceTabs[selectedTab].find((s) => s.id === selectedService)?.title}
//               </span>
//             </a>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Search, Code, Video } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link

const services = [
  {
    category: "Digital Marketing",
    description:
      "SEO Specialists, Google Ads Experts, Performance Marketers, Social Media Managers, Content Marketers, and more.",
    icon: <Search className="w-8 h-8 text-green-600" />,
    link: "/services/digitalmarketing", // ✅ route
  },
  {
    category: "Coding",
    description:
      "Front-end Developers, Back-end Developers, Mobile App Developers, Web App Developers, UI/UX Developers, and more.",
    icon: <Code className="w-8 h-8 text-green-600" />,
    link: "/services/coding", // ✅ route
  },
  {
    category: "Multimedia",
    description:
      "Video Editors, Motion Graphics Artists, Content Creators, Animators, 3D Designers, Visual Storytellers, and more.",
    icon: <Video className="w-8 h-8 text-green-600" />,
    link: "/services/multimedia", // ✅ route
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-black mb-6"
        >
          Expand Your Team with the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            Right Experts
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Hire skilled professionals in Digital Marketing, Coding, and
          Multimedia customized to help you reach your business goals.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block">
              {" "}
              {/* ✅ clickable card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 p-8 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="mb-5 p-4 rounded-full bg-green-50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.category}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                  {service.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
