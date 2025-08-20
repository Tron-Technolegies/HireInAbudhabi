import React from "react";
import { Users, Clock, UserCheck, Shield, Eye } from "lucide-react";

export default function WhatWeDo() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Top talent to your business
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Hire In AbuDhabi, we provide flexible hiring solutions that cater to your project's
            scale, timeline, and budget whether you need quick project support or long-term
            assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Freelancers */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <Users className="text-green-600 w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Freelancers</h3>
              <p className="text-green-600 font-semibold text-lg">
                Short-Term Creative or Technical Assignments
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Utilize skilled freelancers for specific tasks or short-term projects. This is perfect
              for design, development, content creation, or on-demand technical work that
              necessitates swift and high-quality delivery. Ideal for design, development, content
              writing, or ad-hoc tech work that requires rapid delivery with quality.
            </p>
          </div>

          {/* Part-Time Experts */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <Clock className="text-green-600 w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Part-Time Experts</h3>
              <p className="text-green-600 font-semibold text-lg">Flexible, Extended Assistance</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Obtain expert-level support without full-time dedication. Suitable for marketing,
              operations, or technical support positions where flexibility and cost are
              considerations.
            </p>
          </div>

          {/* Full-Time Professionals */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <UserCheck className="text-green-600 w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Full-Time Professionals</h3>
              <p className="text-green-600 font-semibold text-lg">Smooth, Long-Term Integration</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Wish to augment your team with committed talent? Our qualified full-time professionals
              are available to integrate into your operations and work towards your long-term
              objectives.
            </p>
          </div>

          {/* Add-on Monitoring Service */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-6">
              <Eye className="text-green-600 w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Add-on Monitoring Service</h3>
              <p className="text-green-600 font-semibold text-lg">Optional Project Oversight</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Get delivery, quality, and deadlines with our oversight service. We manage freelance
              and part-time work so that you can stay on pace — without the anxiety.
            </p>
          </div>

          {/* Pre-Verified Talent Pool */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <Shield className="text-green-600 w-8 h-8 mb-3" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pre-Verified Talent Pool</h3>
              <p className="text-green-600 font-semibold text-lg">Trusted. Tested. Ready.</p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We handpick every expert so that they meet our quality standards. From creatives, to
              coders, to marketers, our talent is ready when you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
