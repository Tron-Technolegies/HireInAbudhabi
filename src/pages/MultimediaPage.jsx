import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import MultimediaHero from "../components/Multimedia/MultimediaHero";
import MultimediaCandidates from "../components/Multimedia/MultimediaCandidates";
import MultimediaReview from "../components/Multimedia/MultimediaReview";
import MultimediaFaq from "../components/Multimedia/MultimediaFaq";
import MultimediaBottom from "../components/Multimedia/MultimediaBottom";

const MultimediaSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hireinabudhabi.com/services/multimedia#service3",
  name: "Multimedia and Creative Services in Abu Dhabi, UAE",
  description:
    "Hire professional multimedia experts in Abu Dhabi, including graphic designers, video editors, and creative specialists for branding, marketing, and digital content projects.",
  serviceType: "Multimedia and Creative Services",
  provider: {
    "@type": "Organization",
    "@id": "https://hireinabudhabi.com/#organization",
    name: "Hire In Abu Dhabi",
  },
  areaServed: {
    "@type": "Place",
    name: "UAE",
  },
};

const faq4Schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hireinabudhabi.com/services/multimedia#faq4",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can a Graphic & Multimedia Specialist do for you in today's market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Graphic & Multimedia Specialist creates complete brand experiences, not just visuals. Their work includes logos, marketing collateral, social media content, motion graphics, explainer videos, and interactive media. At Hire in Abu Dhabi, we connect you with creative professionals who combine strategy, storytelling, and design to deliver high-impact results across all brand touchpoints.",
      },
    },
    {
      "@type": "Question",
      name: "What ways do your designers stay updated with the latest design trends and tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our graphic designers in Abu Dhabi and across the UAE stay updated through continuous skill development, industry exposure, certifications, and regular tool updates. They adopt modern UI/UX patterns, use AI-assisted design tools, and follow evolving social media design trends to produce high-performing and contemporary visuals.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to hire a video editor for short projects in Abu Dhabi or Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hire in Abu Dhabi provides access to freelance video editors in Abu Dhabi and Dubai who can handle short-term projects such as social media reels, corporate videos, and YouTube content. Our editors use professional tools like DaVinci Resolve and Adobe Premiere Pro to deliver polished, high-quality results.",
      },
    },
    {
      "@type": "Question",
      name: "I am looking to hire a graphic designer in Abu Dhabi for my business. How do I go about doing that?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With Hire in Abu Dhabi, we match you with qualified and vetted graphic designers based on your business goals and creative requirements. This can range from simple social media creatives or logo design to complete brand identity development.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have freelance graphic designers in Abu Dhabi available for ongoing design support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer professional freelance graphic designers in Abu Dhabi who are ideal for long-term or ongoing creative support. Whether you need monthly marketing materials or continuous brand design, freelance designers help you reduce costs while maintaining consistent design quality.",
      },
    },
  ],
};

export default function MultimediaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="service3">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(MultimediaSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faq4Schema)}</script>
        <title>
          Top Graphic Designers & Video Editors in Abu Dhabi | Hire Experts
        </title>
        <meta
          name="description"
          content="Hire expert graphic designers and video editors in Abu Dhabi for branding, social media, ads and more. Vetted creatives ready to bring your vision to life."
        />
        <meta
          name="keywords"
          content="video editor abu dhabi,
video editor in dubai,
graphic designer in abu dhabi,
graphic design abu dhabi,
freelance graphic designer abu dhabi,
"
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
