import React, { useEffect } from "react";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Industries from "../components/Industries";
import RealGrowth from "../components/RealGrowth";
import Testimonials from "../components/Testimonials";
import BrandLogos from "../components/BrandLogos";
import { Helmet } from "react-helmet";
import FAQSection from "../components/FaqSection";
import BottomSection from "../components/BottomSection";
import MeetOurTeam from "../components/MeetOurTeam";

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://hireinabudhabi.com#organization",
  name: "Hire in Abu Dhabi",
  legalName: "Hire in Abu Dhabi",
  url: "https://hireinabudhabi.com/",
  logo: "https://hireinabudhabi.com/assets/logo.png",
  description:
    "Connect with expert digital marketing, coding, and multimedia talent in Abu Dhabi, UAE. Hire freelance, part-time, or full-time specialists for results.",
  foundingLocation: {
    "@type": "Place",
    name: "Abu Dhabi",
  },
  areaServed: {
    "@type": "Place",
    name: "UAE",
  },
  sameAs: [
    "https://www.linkedin.com/company/hireinabudhabi",
    "https://www.instagram.com/hireinabudhabi",
  ],
};

const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hireinabudhabi.com#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What type of professionals can I hire through Hire In Abu Dhabi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire In Abu Dhabi offers vetted digital marketing, coding, and multimedia experts, including SEO specialists in Dubai, web developers in Abu Dhabi, graphic design specialists, video editors, and more. Professionals are available for freelance, part-time, and full-time arrangements.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to hire a digital marketing specialist in Abu Dhabi for my startup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Hire In Abu Dhabi connects startups and companies with experienced digital marketing specialists in Abu Dhabi for growth-focused services such as SEO, paid advertising, and social media marketing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have SEO experts and performance marketers available in Dubai and Abu Dhabi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can hire Dubai SEO experts, Abu Dhabi performance marketing specialists, and Google Ads professionals. All experts are vetted and focused on delivering measurable results.",
      },
    },
    {
      "@type": "Question",
      name: "How do I hire a freelance web designer or developer in Abu Dhabi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can browse Hire In Abu Dhabi’s database of freelance web designers and website developers in Abu Dhabi with expertise in WordPress, custom development, and mobile-optimized websites.",
      },
    },
    {
      "@type": "Question",
      name: "Which multimedia experts can I employ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire In Abu Dhabi provides access to video editors in Abu Dhabi and Dubai, graphic designers in Abu Dhabi, and freelance graphic designers for both short-term and long-term creative projects.",
      },
    },
    {
      "@type": "Question",
      name: "Is your platform an outsourcing company like a BPO firm in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Hire In Abu Dhabi is not a traditional BPO outsourcing company in Dubai. Instead, it offers a smarter and more scalable hiring solution through a vetted network of freelance and full-time professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire through Hire In Abu Dhabi for remote workers or contract employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Hire In Abu Dhabi supports remote hiring solutions for companies looking to hire remote workers, contract employees, or freelancers for project-based or ongoing work.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I hire someone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients find a suitable professional within 24 to 48 hours. Whether you need a social media manager in Dubai, a coding expert in Abu Dhabi, or a graphic designer, the hiring process is fast and efficient.",
      },
    },
  ],
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col" id="organisation">
      <Helmet>
        <title>
          Hire Vetted Marketing, Coding & Multimedia Experts in Abu Dhabi, UAE
        </title>
        <meta
          name="description"
          content="Connect with expert digital marketing, coding, and multimedia talent in Abu Dhabi, UAE. Hire freelance, part-time, or full-time specialists for results."
        />
        <meta
          name="keywords"
          content="bpo outsourcing companies in dubai,
IT outsourcing companies in dubai,
staff outsourcing companies in dubai,
freelance outsourcing platforms abu dhabi,
outsourcing services,
remote staffing solutions,
hr outsourcing providers,
hire remote employees,
contract staffing solutions,
contract staffing companies"
        />
        <link rel="canonical" href="https://hireinabudhabi.com/" />
        <script type="application/ld+json">
          {JSON.stringify(organisationSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(FAQSchema)}</script>
      </Helmet>
      <Hero />
      <BrandLogos />
      <Services />
      <WhyChooseUs />
      <Industries />
      <MeetOurTeam />
      <RealGrowth />
      <Testimonials />
      <FAQSection />
      <BottomSection />
    </div>
  );
}
