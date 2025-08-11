import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import MultimediaHero from "../components/Multimedia/MultimediaHero";
import MultimediaCandidates from "../components/Multimedia/MultimediaCandidates";
import MultimediaReview from "../components/Multimedia/MultimediaReview";
import MultimediaFaq from "../components/Multimedia/MultimediaFaq";
import MultimediaBottom from "../components/Multimedia/MultimediaBottom";

export default function MultimediaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Top Graphic Designers & Video Editors in Abu Dhabi | Hire Experts</title>
        <meta
          name="description"
          content="Hire expert graphic designers and video editors in Abu Dhabi for branding, social media, ads, and more. Vetted creatives ready to bring your vision to life."
        />
        <link rel="canonical" href="https://hireinabudhabi.com/Multimedia" />
      </Helmet>
      <MultimediaHero />
      <MultimediaCandidates />
      <MultimediaReview />
      <MultimediaFaq />
      <MultimediaBottom />
    </div>
  );
}
