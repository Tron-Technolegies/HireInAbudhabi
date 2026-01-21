// import React from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
// export default function BottomSection() {
//   return (
//     <div>
//       <section className="bg-blue-100 py-16">
//         <div className="text-center space-y-4">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-center">
//             Join the{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
//               {" "}
//               Network. <br />
//             </span>{" "}
//             Hire with{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
//               Confidence
//             </span>
//             .
//           </h2>
//           <p className="w-full md:w-1/2 mx-auto text-gray-600">
//             Access a talent pool of qualified digital Digital marketing, coding, and multimedia
//             experts in Abu Dhabi. Match with the ideal professionals, freelance to
//             full-time—quickly.
//           </p>
//         </div>

//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
//           className="mt-20 "
//         >
//           <a
//             href="https://wa.me/971568145866?text=Hi%2C%20I'm%20looking%20for%20help%20with%20%5BSMM%20%2F%20SEO%20%2F%20Ads%20%2F%20Content%5D.%20Can%20you%20assist%3F"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
//             <FaWhatsapp className="text-lg z-10" />
//             <span className="z-10">Start Hiring with Our Help</span>
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleChatClickCustom } from "../utils/whatsapp";

export default function BottomSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-5 text-center">
        <h2 className="text-4xl  md:text-4xl font-extrabold">
          Join the Network. <br />
          Hire with Confidence.
        </h2>
        <p className=" text-gray-600">
          Access a talent pool of qualified{" "}
          <Link to="/">
            , digital marketing, coding, and multimedia experts in Abu
            Dhabi{" "}
          </Link>
          . <br /> Match with the ideal professionals, freelance to full-time
          quickly.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="mt-10 mb-5"
        >
          <button
            onClick={() =>
              handleChatClickCustom(
                "Hi, I'm looking for help with [SMM / SEO / Ads / Content]. Can you assist?",
              )
            }
            className="relative cursor-pointer inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-400  rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
            {/* <FaWhatsapp className="text-lg z-10" /> */}
            <span className="z-10">Start Hiring with Our Help</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
