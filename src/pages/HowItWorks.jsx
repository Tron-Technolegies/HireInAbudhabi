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
        <title>How It Works Hire Freelance, Part-Time & Full-Time Experts in Abu Dhabi</title>
        <meta
          name="description"
          content="Hire vetted digital marketing, coding, and multimedia experts in Abu Dhabi  fast. Freelance, part-time, or full-time hiring is made simple."
        />
        <meta
          name="keywords"
          content="how outsourcing works in Dubai,
hire remote employees Abu Dhabi,
contract staffing process UAE,
digital marketing outsourcing,
website development outsourcing,
creative design outsourcing Dubai,"
        />
        <link rel="canonical" href="https://hireinabudhabi.com/how-it-works" />
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
