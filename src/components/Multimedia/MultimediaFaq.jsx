import React, { useState } from "react";

const multimediaFaqData = [
  {
    question: "What can a Graphic & Multimedia Specialist do for you in today's market?",
    answer:
      "A Graphic & Multimedia Specialist can do more than just make you look good – they create brand experiences. Today's Graphic & Multimedia Specialist: creates logos, marketing collateral, social media content, motion graphics, explainer videos, and interactive media for your brand to resonate on every touchpoint.\n\nAt Hire in Abu Dhabi, we connect you with creative types that blend strategy, storytelling, and design to create high-impact results.",
  },
  {
    question: "What ways do your designers stay updated with the latest design trends and tools?",
    answer:
      "Our graphic designers in Abu Dhabi and across the UAE keep up to speed with evolving trends and milestones through continuing skill development by staying exposed to the industry in real-time, certifications and updates to tools.\n\nWhether a designer adopts new UI/UX patterns, uses AI-assisted design tools, or develops upon the current social media trend format, we make sure every designer in our delivery network is producing modern and high-performing visuals suitable for today’s fast-paced digital identity.",
  },
  {
    question: "Is it possible to hire a video editor for short projects in Abu Dhabi or Dubai?",
    answer:
      "Yes! There are awesome freelance video editors in Abu Dhabi and Dubai that can create high-quality edits on short deadlines for projects like social media reels, corporate videos, or any type of YouTube content.\n\nEditors use professional industry-standard video editing software like DaVinci Resolve and Adobe Premiere Pro so result in a professional and polished outcome.",
  },
  {
    question:
      "I’m looking to hire a graphic designer in Abu Dhabi for my business, how do I go about doing that?",
    answer:
      "There are many ways to find a qualified graphic designer in Abu Dhabi, but with Hire in Abu Dhabi we find qualified and vetted designers that are available to work based on your creative needs or business objectives.\n\nThis could be as simple as social media creatives or a logo design to something as large as creating a full brand identity.",
  },
  {
    question:
      "Do you have freelance graphic designers in Abu Dhabi available for ongoing design support?",
    answer:
      "Absolutely! We have professional freelance graphic designers in Abu Dhabi that are perfect for any long-term or ongoing creative work.\n\nWhether it is monthly marketing materials or continuous brand design, we can help you with your graphic design needs because you save costs by hiring freelance designers without the added costs of hiring someone full-time.",
  },
];

export default function MultimediaFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-white text-black py-16 px-4 sm:px-10">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {multimediaFaqData.map((faq, index) => (
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
