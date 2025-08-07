import React from "react";
import { Helmet } from "react-helmet";
import CodingHero from "../components/Coding/CodingHero";
import CodingReview from "../components/Coding/CodingReview";
import CodinngCandidates from "../components/Coding/CodingCandidates";
import CodingCarousel from "../components/Coding/CodingCandidates";
import CodingFaq from "../components/Coding/CodingFaq";
import CodingBottom from "../components/Coding/CodingBottom";

export default function CodingPage() {
  return (
    <div>
      <Helmet>
        <title>Hire Top Coding Experts in Abu Dhabi,UAE | CONNECT NOW</title>
        <meta
          name="description"
          content="Finding it hard to get skilled coders in Abu Dhabi? We connect you with the best 1% of coders, who are willing to create and grow your tech at record speed"
        />
      </Helmet>

      <section>
        <CodingHero />
        <CodinngCandidates />
        <CodingReview />
        <CodingFaq />
        <CodingBottom />
      </section>
    </div>
  );
}
