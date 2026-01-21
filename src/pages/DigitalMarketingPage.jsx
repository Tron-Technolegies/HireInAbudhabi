import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import DMHero from "../components/DigitalMarketing/DMHero";
import DMExperts from "../components/DigitalMarketing/DMExperts";
import DMReview from "../components/DigitalMarketing/DMReview";
import DMWhyChooseUs from "../components/DigitalMarketing/DMWhyChooseUs";
import DMFaq from "../components/DigitalMarketing/DMFaq";
import DMBottom from "../components/DigitalMarketing/DMBottom";
import DMCandidates from "../components/DigitalMarketing/DMCandidates";

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hireinabudhabi.com/services/digitalmarketing#service",
  name: "Digital Marketing Services in Abu Dhabi, UAE",
  description:
    "Hire vetted digital marketing experts in Abu Dhabi, including SEO specialists, performance marketers, Google Ads professionals, and social media managers for freelance, part-time, or full-time roles.",
  serviceType: "Digital Marketing",
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

const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://hireinabudhabi.com/services/digitalmarketing#faq2",
  mainEntity: [
    {
      "@type": "Question",
      name: "What qualifications are important for finding a marketer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When hiring a marketer or digital marketing expert in Abu Dhabi or a social media manager in Dubai, focus on experience rather than just degrees or diplomas. Look for proven results from successful digital marketing campaigns, knowledge of Google Ads, SEO, social media management, paid campaigns, and strong analytical skills. Certifications from organizations like Google, HubSpot, or Meta are valuable, but understanding your industry and target market is the key factor.",
      },
    },
    {
      "@type": "Question",
      name: "I have a small business — do I really need digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Whether you run a small shop in Abu Dhabi or a service-based business in Dubai, digital marketing helps you reach potential customers at the point of search. Hiring an SEO expert in Abu Dhabi or a social media marketer in Dubai allows you to target the right audience cost-effectively. Even with a small budget, strategies like SEO, Google Ads, and social media marketing can deliver meaningful results.",
      },
    },
    {
      "@type": "Question",
      name: "What are the advantages of working with digital marketing professionals from your company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When you work with Hire In Abu Dhabi, you are not hiring an unqualified freelancer. You gain access to a vetted team of digital marketing professionals, including performance marketers in Abu Dhabi, Google Ads experts, and SEO experts in Dubai. This team approach saves time and money while driving leads, increasing sales, and improving your online presence across the UAE.",
      },
    },
    {
      "@type": "Question",
      name: "What will the digital marketing professionals do for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our digital marketing professionals handle all key activities needed to grow your business online. This includes Search Engine Optimization (SEO) to improve Google rankings, Google Ads management for targeted paid traffic, social media account management and content creation, performance marketing to optimize conversions and acquisition costs, and analytics and reporting to measure performance. Services are tailored to your specific business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How long will it take to see results from digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing requires consistency to deliver results. SEO campaigns in Abu Dhabi or Dubai typically show noticeable improvements within 3 to 6 months. Google Ads and performance marketing often produce faster results, sometimes within weeks. Social media growth varies based on branding and visibility, with gradual and sustainable gains over time.",
      },
    },
    {
      "@type": "Question",
      name: "What are your primary digital marketing tactics for B2B and B2C businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For B2B businesses, our tactics include SEO strategies, LinkedIn marketing, lead generation funnels, and performance campaigns targeting decision makers. For B2C businesses, we focus on Instagram ads, Facebook ads, and Google Ads to drive traffic, engagement, and sales. All tactics are customized to your industry and target audience.",
      },
    },
  ],
};

export default function DigitalMarketingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Hire a Top Digital Marketing Expert in Abu Dhabi | CONNECT NOW
        </title>
        <meta
          name="description"
          content="Connect with vetted digital marketing experts in abu dhabi who turn strategy into real growth. SEO, PPC & social media strategies. Get results today"
        />
        <meta
          name="keywords"
          content="digital marketing expert in abu dhabi,
seo expert in dubai,
best seo expert in dubai,
seo expert in abudhabi,
seo specialist in abudhabi,
performance marketing expert in abudhabi,
performance marketing executive in dubai,
google ads specialist in abudhabi,
social media expert in abudhabi,
social media manager in dubai,
social media marketer in dubai,
"
        />
        <link
          rel="canonical"
          href="https://hireinabudhabi.com/Digitalmarketing"
        />
        <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(FAQSchema)}</script>
      </Helmet>
      <section id="service">
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
