import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Industries from "../components/Industries";
import RealGrowth from "../components/RealGrowth";
import Testimonials from "../components/Testimonials";
import CandidateProfiles from "../components/CandidateProfiles";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="home">
        <Hero />
      </section>
      <section id="howItWorks">
        <HowItWorks />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="industries">
        <Industries />
      </section>
      <section>
        <CandidateProfiles />
      </section>
      <section>
        <RealGrowth />
      </section>
      <section id="testimonials">{/* <Testimonials /> */}</section>
    </div>
  );
}
