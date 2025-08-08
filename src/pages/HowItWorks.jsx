import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import WhyChooseInHowItWorks from "../components/Howitworks/WhyChooseInHowItWorks";
import HowItWorksHero from "../components/Howitworks/HowItWorksHero";
import HowItWorks from "../components/HowItWorks";
import BottomSection from "../components/BottomSection";
export default function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>How It Works – Hire Freelance, Part-Time & Full-Time Experts in Abu Dhabi</title>
        <meta
          name="description"
          content="Learn how Hire In Abu Dhabi helps you hire vetted digital marketing, coding, and multimedia experts—faster. Freelance, part-time, or full-time hiring made simple."
        />
      </Helmet>

      <section>
        <HowItWorksHero />
        <HowItWorks />
        <WhyChooseInHowItWorks />
        <BottomSection />
      </section>
    </div>
  );
}
