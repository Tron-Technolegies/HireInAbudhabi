import React, { useState } from "react";

const codingFaqData = [
  {
    question: "How quickly can I hire a developer or team through Hire in Abu Dhabi?",
    answer:
      "The question of time is the most important factor in developing or scaling a digital product. Through Hire in Abu Dhabi you can onboard an available developer or team from as quickly as 24 to 72 hours, depending on your remote project requirements. All professionals and developers in the Hire in Abu Dhabi network are pre-vetted, based in Abu Dhabi or the wider UAE, and fully prepared to get started. Whenever you are.",
  },
  {
    question: "What are the benefits of hiring dedicated developers for my business?",
    answer:
      "In the UAE, hiring dedicated developers provides your business a strong value proposition:\n\n• Focused Talent – Developers are concentrating on your project\n• Fast Turn Around – Results not distractions\n• Scalability – Can grow your team easily as you grow your project\n• Cost Effective – No overhead of hiring employees\n• Direct Engagement – Working with your developer or team directly\n\nNo matter if you need a website, mobile app, or your very own custom platform, dedicated talent means quicker delivery and higher quality.",
  },
  {
    question: "Why Hire in Abu Dhabi for your dedicated developers in the UAE?",
    answer:
      "Hiring in Abu Dhabi is not just a generic platform like 'freelance' websites. It is fundamentally about quality, reliability, and flexibility. Here is why businesses in the UAE choose Hire in Abu Dhabi:\n\n• Vetted Developers – All developers have gone through interviews, portfolio checks, and background checks if necessary\n• Local Talent, Global Quality – Professionals based in Abu Dhabi with international-level skills\n• Flexible Engagements – Hire freelance, part-time or full-time developers based on your goals\n• Ongoing Support – We stay with you even after placement\n\nOur goal is to be more than a hiring platform. We're your strategic partner for digital growth.",
  },
  {
    question: "What are some ways to hire a dedicated developer for my company?",
    answer:
      "With Hire in Abu Dhabi, you can choose the model that fits your needs:\n\n• Freelance Developer – one-off or short-term tasks\n• Part-Time Developer – flexible hours for startups or small businesses\n• Full-Time Dedicated Developer – longer-term commitment with full focus\n• Project-Based Team – a full team for your entire solution\n• On-Demand Specialists – hire experts in coding, web design, or digital marketing\n\nNo matter the size or type, we have the right developer in Abu Dhabi ready to join your mission.",
  },
  {
    question: "How is a web designer different from a web developer?",
    answer:
      "A web designer in Abu Dhabi works on the visual design, UI/UX, and branding of a website, whereas a developer codes what drives the functionality of the site.",
  },
  {
    question: "Can I employ a freelance web designer in Abu Dhabi for small-scale projects?",
    answer:
      "Yes, we offer access to freelance web designers in Abu Dhabi who can work on one-time designs, redesigns, or extended support—no long-term commitments necessary.",
  },
];

export default function CodingFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 px-4 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {codingFaqData.map((faq, index) => (
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
