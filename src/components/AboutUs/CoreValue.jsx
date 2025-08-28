import React from "react";
import {
  ShieldCheck,
  Award,
  Zap,
  Handshake,
  HeartHandshake,
  Rocket,
  Building,
  User,
  LayoutGrid,
} from "lucide-react";

export default function CoreValue() {
  const coreValues = [
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "Integrity",
      description:
        "We are transparent to the fullest extent with clients, partners, and talent. Every encounter is founded on honesty, fairness, and accountability to build enduring trust.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Quality First",
      description:
        "Excellence is not an option. We rigorously screen every expert to confirm that they have the actual world abilities and professionalism required to create impact from the very start.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Efficiency",
      description:
        "Time is of the essence. We cut to the chase and deliver pre-qualified, ready-to-go professionals who can make an instant impact quickly.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-white" />,
      title: "Supportive",
      description:
        "We don't just place people. From integration to project success, our staff remains accessible to assist clients and talent every step of the way.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Adaptability",
      description:
        "There is no one-size-fits-all solution. If you're scaling rapidly or covering niche positions, our adaptable hiring models conform to your objectives, timelines, and company culture.",
    },
  ];

  const industriesWeServe = [
    {
      icon: <Rocket className="w-8 h-8 text-gray-700" />,
      title: "Startups",
      description: "Looking for lean growth.",
    },
    {
      icon: <Building className="w-8 h-8 text-gray-700" />,
      title: "Corporates",
      description: "Building scalable teams.",
    },
    {
      icon: <User className="w-8 h-8 text-gray-700" />,
      title: "Solopreneurs and creators",
      description: "Needing on-demand expertise.",
    },
    {
      icon: <LayoutGrid className="w-8 h-8 text-gray-700" />,
      title: "Agencies and SMBs",
      description: "Looking to outsource specialized roles.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Core Values Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Core Values</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We are built on a foundation of trust, excellence, and support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl "
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Industries We Serve Section */}
        <div className="text-center mt-24 mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Our flexible hiring solutions are tailored for a wide range of businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesWeServe.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
