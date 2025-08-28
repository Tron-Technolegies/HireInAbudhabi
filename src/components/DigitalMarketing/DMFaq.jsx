import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "What qualifications are important for finding a marketer?",
    answer: (
      <>
        As with any other profession (for example hiring a doctor), when considering a marketer or{" "}
        <Link to="/Digitalmarketing">digital marketing expert in Abu Dhabi</Link>, a social media
        manager in Dubai, focus on experience and not just degrees or diplomas. Seek experience,
        results in terms of successful digital marketing campaigns, knowledge about managing digital
        campaigns on Google's ad platform, knowledge about SEO, social media teams and paid
        campaigns and a range of analytical skills. Today many people have formal certifications
        from organisations including Google and HubSpot and Meta. The key factor is how well the
        person understands your industry and the market you serve.
      </>
    ),
  },
  {
    question: "I have a little business do I really need Digital Marketing?",
    answer: (
      <>
        Definitely. Whether you are running a small shop in Abu Dhabi or a service based business in
        Dubai, digital marketing puts you in front of the potential customer at the point of search.
        Hiring a{" "}
        <Link to="/Digitalmarketing">
          SEO expert in Abu Dhabi or social media marketer in Dubai
        </Link>{" "}
        can provide cost-effective targeted audiences. Even with a small budget you can use your
        marketing budget wisely in various responsive strategies, like SEO, Google Ads or social
        media to produce meaningful results.
      </>
    ),
  },
  {
    question:
      "What are the advantages of working with digital marketing professionals from your company?",
    answer: (
      <>
        When hiring us you're not just hiring an unqualified freelancer. We are one 'Team', with the
        vetted professionals you need. Our experts consist of{" "}
        <Link to="/Digitalmarketing">performance marketers in Abu Dhabi</Link>, Google Ads experts,
        and SEO experts in Dubai. These experts have proven results. Make the most of our expertise
        and industry experience. This saves you time and money and makes it clear you can be
        confident in initiatives that drive leads, increase sales and improve your online presence
        in the UAE.
      </>
    ),
  },
  {
    question: "What will the digital marketing professionals do for you?",
    answer: (
      <>
        When you work with our digital marketing professionals, they will do everything needed to
        help your business grow online. This will include:
        <br />• Search Engine Optimization (SEO) to help your website rank higher on Google.
        <br />• Google Ads account management to receive targeted paid traffic.
        <br />• Social Media Management account and content creation.
        <br />• Performance Marketing to optimize conversion and customer acquisition costs.
        <br />• Analytics & Reporting so you can clearly understand what is or is not effectively
        working.
        <br />
        So, whether you need an SEO specialist to help you in Abu Dhabi or a social media manager in
        Dubai, we can change the activities to suit your business goals.
      </>
    ),
  },
  {
    question: "How long will it take for me to see results from my digital marketing efforts?",
    answer: (
      <>
        While digital marketing isn’t magic, digital marketing can still be an impactful way to
        build your brand, and consistency is required to fully unleash the potential. For SEO
        consultants based in Abu Dhabi or Dubai we usually see results showing within 3 to 6 months
        of work. Google Ads or performance marketing is usually faster and can see some visible
        outcomes within weeks or months. The same is true for social media though the growth is
        variable depending on your branding and current visibility levels, and there are usually
        some start-end gains that appear across the platforms. As a rule of thumb we look to see
        clients build sustainable, long-term, and gradual results over time.
      </>
    ),
  },
  {
    question: "What are your primary digital marketing tactics for B2B and B2C businesses?",
    answer: (
      <>
        B2B tactics are SEO tactics, LinkedIn marketing, lead generation funnels and performance
        campaigns to decision makers. B2C tactics are Instagram promoted ads, Facebook ads, or
        Google Ads to gain traffic, engage customers and ultimately, drive sales. Regardless of
        whether it is a{" "}
        <Link to="/Digitalmarketing">
          social media expert in Abu Dhabi or an SEO expert in Dubai
        </Link>
        , our tactics are attuned to your industry and audience.
      </>
    ),
  },
];

export default function DMFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 px-4 sm:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-green-200 rounded-lg bg-white shadow-sm">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium focus:outline-none"
            >
              <span className="text-lg">{`${index + 1}. ${faq.question}`}</span>
              <span className="text-green-500 text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
