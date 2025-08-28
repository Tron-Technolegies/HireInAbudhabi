import React from "react";
import { Link } from "react-router-dom";
import { Users, LayoutGrid, BarChart, TrendingUp, Share2, RefreshCw } from "lucide-react";

export default function DMWhyChooseUs() {
  const whychooseus = [
    {
      title: "Experienced Team with Field Experience",
      description: (
        <>
          Our <Link to="/Digitalmarketing">digital marketing experts in Abu Dhabi</Link>, have solid
          real-world experience and know when and how to use the appropriate tools and methods to
          achieve tangible results. We take time to learn your business, audience, and goals, and
          create strategies that actually get you results.
        </>
      ),
      icon: Users,
    },
    {
      title: "Flexible Hiring Models",
      description: (
        <>
          We know every business is different, and that's why we offer flexible hiring approaches.
          Whether you want assistance hourly, fixed-price project, or ongoing support,{" "}
          <Link to="/Digitalmarketing">
            hire our SEO experts, performance marketing analysts or social media managers
          </Link>{" "}
          per your requirement.
        </>
      ),
      icon: LayoutGrid,
    },
    {
      title: "Transparency & Integrity on Reporting",
      description: (
        <>
          We believe in trusting the process, that's why we provide you with detailed weekly, or
          monthly reports. We provide reports beyond the standard reporting metrics. We take the
          time to report focused on traffic growth, leads generated, and changes to the performance
          so you can see what we can actually accomplish.
        </>
      ),
      icon: BarChart,
    },
    {
      title: "Always Learning About Trends",
      description: (
        <>
          We are continually learning about the newest trends, technology, and best practices,
          allowing you to stay ahead with modern, high-performing digital marketing strategies that
          are specifically designed for the fast-paced digital landscape of today.
        </>
      ),
      icon: TrendingUp,
    },
    {
      title: "Utilizing Social Media",
      description: (
        <>
          Our social team based in Abu Dhabi and Dubai, develop strategies to use social media to
          maintain your brand’s profile online and ensure your business reaches its target audience
          on the appropriate platform, whether that be Instagram, Facebook, LinkedIn, and others,
          and we make the most of your visibility by providing you with engagement.
        </>
      ),
      icon: Share2,
    },
    {
      title: "Campaign Updates & Measures",
      description: (
        <>
          If we do spend our time running a campaign, we do not just run it. We continuously
          monitor, refine, and keep things up to date. One of our team will continuously monitor
          your analytic measures from your website, always tracking important data. From traffic
          viewing to lead conversions, we will keep your business agility in motion.
        </>
      ),
      icon: RefreshCw,
    },
  ];

  return (
    <div>
      <section className="bg-green-50 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Why Choose Our Digital Marketing Experts?
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl mt-6 text-gray-700 leading-relaxed">
          Our digital marketing solutions are meticulously crafted around your business's unique
          needs to ensure success. Whether your objective is to significantly increase leads, boost
          revenue, or simply enhance your online presence, our dedicated experts are here to help
          your business make a profound difference.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whychooseus.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center border border-blue-100"
            >
              {item.icon && (
                <div className="mb-6 p-4 bg-blue-500 rounded-full text-white shadow-md">
                  <item.icon size={36} strokeWidth={2} />
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
