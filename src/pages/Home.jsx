import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Industries from "../components/Industries";
import RealGrowth from "../components/RealGrowth";
import Testimonials from "../components/Testimonials";
import CandidateProfiles from "../components/CandidateProfiles";
import BrandLogos from "../components/BrandLogos";
import { Helmet } from "react-helmet";
import FAQSection from "../components/FaqSection";
import BottomSection from "../components/BottomSection";
import MeetOurTeam from "../components/MeetOurTeam";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Hire Vetted Marketing, Coding & Multimedia Experts in Abu Dhabi, UAE</title>
        <meta
          name="description"
          content="Connect with expert digital marketing, coding, and multimedia talent in Abu Dhabi, UAE. Hire freelance, part-time, or full-time specialists for reliable results."
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
      </Helmet>

      <section id="home">
        <Hero />
      </section>
      <section id="brandlogos">
        <BrandLogos />
      </section>
      {/* <section id="howItWorks">
        <HowItWorks />
      </section> */}
      <section id="services">
        <Services />
      </section>
      <section>
        <WhyChooseUs />
      </section>

      <section id="industries">
        <Industries />
      </section>
      <MeetOurTeam />
      {/* <section>
        <CandidateProfiles />
      </section> */}
      <section>
        <RealGrowth />
      </section>
      <section id="testimonials">{<Testimonials />}</section>
      <section>
        <FAQSection />{" "}
      </section>
      <section>
        <BottomSection />
      </section>
    </div>
  );
}
