import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import DMHero from "../components/DigitalMarketing/DMHero";
import DMExperts from "../components/DigitalMarketing/DMExperts";
import DMReview from "../components/DigitalMarketing/DMReview";
import DMWhyChooseUs from "../components/DigitalMarketing/DMWhyChooseUs";
import DMFaq from "../components/DigitalMarketing/DMFaq";
import DMBottom from "../components/DigitalMarketing/DMBottom";
import DMCandidates from "../components/DigitalMarketing/DMCandidates";

export default function DigitalMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Hire a Top Digital Marketing Expert in Abu Dhabi | CONNECT NOW</title>
        <meta
          name="description"
          content="Connect with vetted digital marketing experts in abu dhabi who turn strategy into real growth. SEO, PPC & social media strategies. Get results today"
        />
      </Helmet>
      <section>
        <DMHero />
        <DMCandidates />
        <DMExperts />
        <DMReview />
        <DMWhyChooseUs />
        <DMFaq />
        <DMBottom />
      </section>
    </div>
  );
}
