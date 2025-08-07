import React from "react";
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

export default function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Hire Vetted Marketing, Coding & Multimedia Experts in Abu Dhabi, UAE</title>
        <meta
          name="description"
          content="Connect with top digital marketing, coding, and multimedia experts in Abu Dhabi. Hire freelance, part-time, or full-time talent—fully vetted and ready to deliver results."
        />
        <link rel="canonical" href="https://hireinabudhabi.com/" />
      </Helmet>

      <section id="home">
        <Hero />
      </section>
      <section id="brandlogos">
        <BrandLogos />
      </section>
      <section id="howItWorks">
        <HowItWorks />
      </section>
      <section id="services">
        <Services />
      </section>
      <section>
        <WhyChooseUs />
      </section>

      <section id="industries">
        <Industries />
      </section>
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
