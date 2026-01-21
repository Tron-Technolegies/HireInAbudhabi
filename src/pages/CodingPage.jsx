import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CodingHero from "../components/Coding/CodingHero";
import CodingReview from "../components/Coding/CodingReview";
import CodinngCandidates from "../components/Coding/CodingCandidates";
import CodingCarousel from "../components/Coding/CodingCandidates";
import CodingFaq from "../components/Coding/CodingFaq";
import CodingBottom from "../components/Coding/CodingBottom";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hireinabudhabi.com/services/coding#service2",
  name: "Coding and Web Development Services in Abu Dhabi, UAE",
  description:
    "Find experienced web developers and coding experts in Abu Dhabi, UAE specializing in website development, WordPress, custom coding, mobile optimization, and scalable digital solutions.",
  serviceType: "Coding and Web Development",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hireinabudhabi.com/services/coding#faq3",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can I hire a developer or team through Hire in Abu Dhabi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Through Hire in Abu Dhabi, you can onboard an available developer or development team within 24 to 72 hours, depending on your project requirements. All developers in our network are pre-vetted, based in Abu Dhabi or the wider UAE, and ready to get started immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of hiring dedicated developers for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hiring dedicated developers in the UAE offers focused talent, faster turnaround times, scalability as your project grows, cost efficiency without employee overhead, and direct engagement with your developer or team. This results in quicker delivery and higher-quality digital products.",
      },
    },
    {
      "@type": "Question",
      name: "Why Hire in Abu Dhabi for dedicated developers in the UAE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire in Abu Dhabi focuses on quality, reliability, and flexibility. All developers are vetted through interviews and portfolio reviews. You work with local UAE-based talent that meets global standards, benefit from flexible engagement models, and receive ongoing support even after developer placement.",
      },
    },
    {
      "@type": "Question",
      name: "What are some ways to hire a dedicated developer for my company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hire in Abu Dhabi offers multiple hiring models including freelance developers for short-term tasks, part-time developers for flexible needs, full-time dedicated developers for long-term projects, project-based teams for complete solutions, and on-demand specialists in coding, web design, or digital marketing.",
      },
    },
    {
      "@type": "Question",
      name: "How is a web designer different from a web developer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A web designer in Abu Dhabi focuses on visual design, UI/UX, and branding, while a web developer handles the coding and functionality that powers the website.",
      },
    },
    {
      "@type": "Question",
      name: "Can I employ a freelance web designer in Abu Dhabi for small-scale projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Hire in Abu Dhabi provides access to freelance web designers in Abu Dhabi who can handle one-time projects, redesigns, or extended support without requiring long-term commitments.",
      },
    },
  ],
};

export default function CodingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Hire Top Coding Experts in Abu Dhabi,UAE | CONNECT NOW</title>
        <meta
          name="description"
          content="Finding it hard to get skilled coders in Abu Dhabi? We connect you with the best 1% of coders, who are willing to create and grow your tech at record speed"
        />
        <meta
          name="keywords"
          content="website developer in abu dhabi,
coding abu dhabi,
coding experts in abu dhabi,
web designer in abu dhabi,
web development in abu dhabi,
freelance web designer abu dhabi,
"
        />
        <link rel="canonical" href="https://hireinabudhabi.com/Coding" />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section id="service2">
        <CodingHero />
        <CodinngCandidates />
        <CodingReview />
        <CodingFaq />
        <CodingBottom />
      </section>
    </div>
  );
}
