import React from "react";
import { Linkedin, Mail } from "lucide-react";

const MeetOurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rishaan",
      position: "CEO & Founder",
      image: "/rishaan.webp",
      alt: "Rishan - CEO of Hire in Abu Dhabi | Remote Staffing Solutions",
      bio: "10+ years of experience in talent acquisition and business development in the UAE market.",
      linkedin: "#",
      email: "john@hireinabudhabi.com",
    },
    {
      id: 2,
      name: "Sreelakshmi",
      position: "CMO",
      image: "/Sreelakshmi.webp",
      alt: "Sreelakshmi - Team Member at Hire in Abu Dhabi | Contract Staffing Solutions in UAE",
      bio: "Expert in matching top-tier professionals with leading companies across Abu Dhabi.",
      linkedin: "#",
      email: "sarah@hireinabudhabi.com",
    },
    {
      id: 3,
      name: "Hilal Muhammed",
      position: "COO",
      image: "/Hilal.webp",
      alt: "Hilal Mohammed - Team Member at Hire in Abu Dhabi | HR Outsourcing, Contract Staffing in UAE",
      bio: "Specialized in digital marketing strategies and helping businesses grow their online presence.",
      linkedin: "#",
      email: "ahmed@hireinabudhabi.com",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced professionals are dedicated to connecting top talent with leading
            companies in Abu Dhabi
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white  overflow-hidden ">
              {/* Member Image */}
              <div className="aspect-square overflow-hidden bg-white">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover "
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't load
                    e.target.src = `https://via.placeholder.com/400x400/E5E7EB/6B7280?text=${member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}`;
                  }}
                />
              </div>

              {/* Member Info */}
              <div className="p-2">
                <h3 className="text-xl font-bold text-gray-900 mb-0">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                {/* <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p> */}

                {/* Social Links */}
                {/* <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors duration-200"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to work with our expert team?</p>
          <a
            href="http://Wa.me/971568145866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default MeetOurTeam;
