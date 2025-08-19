import React, { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">Effective Date: 01/01/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to Hire In AbuDhabi. By accessing or using our website
            https://hireinabudhabi.com/ and services, you agree to the following Terms & Conditions.
            Please read them carefully.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Definitions</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                "Platform" / "Website" – Hire In AbuDhabi's online service at
                https://hireinabudhabi.com/.
              </li>
              <li>"Client" – A business, startup, or individual seeking to hire talent.</li>
              <li>
                "Talent" / "Professional" – An individual offering services (freelance, part-time,
                full-time) via the platform.
              </li>
              <li>"User" – Any person accessing or using the platform.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use of Services</h2>
            <ul className="space-y-3 text-gray-700">
              <li>You must be at least 18 years old to use our services.</li>
              <li>
                You agree to provide accurate, complete, and updated information when creating an
                account.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your account and
                password.
              </li>
              <li>
                You must not misuse the platform (e.g., for unlawful activity, spam, or fraud).
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Services Provided</h2>
            <p className="text-gray-700 mb-4">
              Hire In AbuDhabi connects clients with vetted professionals in:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Digital Marketing</li>
              <li>• Software Development</li>
              <li>• Multimedia & Creative Services</li>
            </ul>
            <p className="text-gray-700">
              We are not a traditional recruitment agency or employer. We provide a talent-sourcing
              platform to facilitate connections between clients and professionals.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Fees & Payments</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Clients pay a commission fee only upon successful placement.</li>
              <li>Monitoring services or premium features may carry additional fees.</li>
              <li>
                Talent-side fees may apply only for optional premium placements or highlighted
                listings.
              </li>
              <li>All fees are communicated transparently before engagement.</li>
              <li>Payments must be made in the currency and method specified on our platform.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Responsibilities</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clients</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ensure compliance with UAE employment and labor laws when hiring talent.</li>
                <li>• Provide accurate job descriptions, scope of work, and fair payment.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Talent</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Provide truthful information about skills, experience, and qualifications.
                </li>
                <li>• Deliver work professionally and on time as agreed with clients.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Platform (Hire In AbuDhabi)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Vet professionals through interviews, portfolio checks, and background
                  verification.
                </li>
                <li>• Facilitate smooth connections between clients and talent.</li>
                <li>
                  • We are not liable for the performance, quality, or outcome of services delivered
                  by talent.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                Content on the platform (logo, design, brand assets) belongs to Hire In AbuDhabi.
              </li>
              <li>
                Users retain rights to their own portfolios, resumes, and content uploaded to the
                platform.
              </li>
              <li>
                Clients retain ownership of work delivered by talent, unless otherwise agreed in
                writing.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                We strive to maintain a secure and reliable platform, but we cannot guarantee
                uninterrupted service.
              </li>
              <li>
                Hire In AbuDhabi is not liable for disputes, delays, or losses arising from
                client–talent engagements.
              </li>
              <li>Our liability is limited to the extent permitted under UAE law.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Termination</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to suspend or terminate accounts that:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Provide false or misleading information</li>
              <li>• Violate these Terms & Conditions</li>
              <li>• Engage in fraudulent or unlawful activities</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms & Conditions are governed by the laws of the United Arab Emirates. Any
              disputes shall be resolved under the jurisdiction of Abu Dhabi courts.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Updates to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms & Conditions from time to time. Updates will be posted on
              this page with a new effective date.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              For any questions about these Terms & Conditions, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hire In AbuDhabi</h3>
              <p className="text-gray-700 mb-2">📧 Email: Hireinmarketing@gmail.com</p>
              <p className="text-gray-700">
                📍 Address: Plot 122, Ad Doja 1st St, M-40 Mussafah, Abu Dhabi, United Arab Emirates
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer spacing */}
      <div className="pb-12"></div>
    </div>
  );
};

export default TermsConditions;
