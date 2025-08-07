import React, { useState } from "react";

const faqData = [
  {
    question: "What type of professionals can I hire through Hire In Abu Dhabi?",
    answer:
      "We offer vetted digital marketing, coding, and multimedia experts like SEO specialists in Dubai, web developers in Abu Dhabi, graphic design specialists, video editors, and many more. You can hire them on freelance, part-time, or full-time arrangements.",
  },
  {
    question: "Is it possible to hire a digital marketing specialist in Abu Dhabi for my startup?",
    answer:
      "Absolutely! Our platform excels at matching startups and companies with seasoned digital marketing professionals in Abu Dhabi for growth-driven opportunities in SEO, paid advertising, and social media.",
  },
  {
    question: "Do you have SEO experts and performance marketers available in Dubai and Abu Dhabi?",
    answer:
      "Yes, you can hire a Dubai SEO expert, an Abu Dhabi performance marketing expert, or a Google Ads professional—all reviewed, results-oriented individuals.",
  },
  {
    question: "How do I hire a freelance web designer or developer in Abu Dhabi?",
    answer:
      "You can search our database of Abu Dhabi freelance web designers and website developers with expertise in WordPress, custom coding, and mobile optimization development.",
  },
  {
    question: "Which multimedia experts can I employ?",
    answer:
      "We give you access to Abu Dhabi and Dubai video editors, Abu Dhabi graphic designers, and Abu Dhabi freelance graphic designers for short-term or long-term creative projects.",
  },
  {
    question: "Is your platform an outsourcing company like a BPO firm in Dubai?",
    answer:
      "Although we provide the same kind of flexibility, we are not a conventional BPO outsourcing firm in Dubai. We make hiring smarter and scalable via a vetted network of full-time and freelance professionals.",
  },
  {
    question: "Can I hire through Hire In Abu Dhabi for remote workers or contract employees?",
    answer:
      "Yes! We facilitate remote hiring solutions, contract staffing firms, and companies seeking to employ remote workers for freelance projects or regular work.",
  },
  {
    question: "How fast can I hire someone?",
    answer:
      "The majority of clients find a match within 24–48 hours. Whether you require a social media manager in Dubai, a coding expert in Abu Dhabi, or a graphic designer, we bring you on board quickly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-gray-400">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <div className="px-6 pb-4 text-gray-300">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
