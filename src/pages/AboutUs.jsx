import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../components/AboutUs/AboutHero";
import CoreValue from "../components/AboutUs/CoreValue";
import WhatWeDo from "../components/AboutUs/WhatWeDo";
import AboutBottom from "../components/AboutUs/AboutBottom";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Outsourcing & Remote Staffing Solutions in Abu Dhabi | Hire Experts UAE</title>
        <meta
          name="description"
          content="Hire skilled coding, multimedia, and graphic design experts in Abu Dhabi & UAE. Flexible outsourcing and remote staffing start hiring today."
        />
        <meta
          name="keyword"
          content="outsourcing companies in UAE,
staffing solutions Dubai,
IT & BPO outsourcing Abu Dhabi,
digital marketing expert UAE,
web development & coding Abu Dhabi,
graphic design & video editing services,"
        />
        <link rel="canonical" href="https://hireinabudhabi.com/AboutUs" />
      </Helmet>
      <AboutHero />
      <CoreValue />
      <WhatWeDo />
      <AboutBottom />
    </div>
  );
}
