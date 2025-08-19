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
          content="Hire top digital marketing, coding, and multimedia experts in Abu Dhabi. Find vetted freelance, part-time, or full-time talent ready to deliver results today."
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
