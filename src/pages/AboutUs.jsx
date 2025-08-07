import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/AboutUs/AboutHero";
import CoreValue from "../components/AboutUs/CoreValue";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import AboutBottom from "../components/AboutUs/AboutBottom";

export default function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Outsourcing & Remote Staffing Solutions in Abu Dhabi | Hire Experts UAE</title>
        <meta
          name="description"
          content="Hire skilled coding, multimedia, and graphic design experts through flexible outsourcing and remote staffing solutions. Serving businesses across Abu Dhabi and the UAE"
        />
      </Helmet>
      <AboutHero />
      <CoreValue />
      <WhatWeDo />
      <AboutBottom />
    </div>
  );
}
