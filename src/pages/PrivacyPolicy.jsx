import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Mail, MapPin, CircleDot, CheckCircle } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Privacy Policy UAE | Data Protection & Security | Hire in Abu Dhabi</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Hire in Abu Dhabi. Learn how we handle, protect, and secure your personal data across Abu Dhabi and the UAE with full transparency."
        />
        <link rel="canonical" href="https://hireinabudhabi.com/privacy-policy" />
      </Helmet>

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Effective Date: 01/01/2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Hire In AbuDhabi we value your privacy matters to us. This Privacy Policy explains
            how we collect, use, and protect your personal information when you visit our website
            https://hireinabudhabi.com/ or use our services.
          </p>

          {/* 1. Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">When you use our platform, we may collect:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                Personal Details – name, email, phone number, company name, and contact details.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                Professional Information – CV/resume, portfolio, skills, job history, or other
                career data.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                Account Data – login details, profile preferences, communication history.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                Technical Data – IP address, browser type, device information, cookies, and usage
                logs.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" />
                Business Data – details shared by clients related to job postings or hiring needs.
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Data</h2>
            <p className="text-gray-700 mb-4">We use your personal information to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Create and manage your
                account.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Connect clients with
                vetted talent (freelance, part-time, or full-time).
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Process applications,
                placements, and service requests.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Communicate updates,
                notifications, and relevant offers.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Monitor website usage
                and improve user experience.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Ensure legal compliance
                and protect against misuse of our platform.
              </li>
            </ul>
          </section>

          {/* 3. Sharing of Data */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Sharing of Data</h2>
            <p className="text-gray-700 mb-4">
              We only share your data when necessary, including with:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Clients or Employers – if
                you are applying or matched for roles.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Service Providers –
                hosting, analytics, and communication tools (under confidentiality agreements).
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Legal Authorities – if
                required by UAE law.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              We do not sell or rent your personal data to third parties.
            </p>
          </section>

          {/* 4. Cookies & Tracking */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Cookies & Tracking</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar technologies to:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Keep you signed in.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Remember your
                preferences.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Analyze traffic and
                usage patterns.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              You may disable cookies in your browser, but some site features may not work properly.
            </p>
          </section>

          {/* 5. Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" /> We keep your data only as
                long as necessary to provide our services or as required by law.
              </li>
              <li className="flex items-start">
                <CircleDot className="w-5 h-5 mr-2 text-gray-600 mt-1" /> If you delete your account
                or request removal, we will erase your data within 6 months, unless a longer period
                is legally required.
              </li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">Under UAE law (PDPL), you have the right to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Access the personal data
                we hold about you.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Request corrections or
                updates.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Request deletion of your
                data.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Withdraw consent to
                processing (which may limit platform access).
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-gray-600 mt-1" /> Lodge a complaint with
                the relevant UAE data protection authority.
              </li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Data Security</h2>
            <p className="text-gray-700">
              We use appropriate technical and organizational measures (encryption, access controls,
              secure servers) to protect your information. While we strive for security, no method
              is 100% secure.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are intended for individuals 18 years and older. We do not knowingly
              collect data from children. If we discover information collected from a minor, we will
              delete it immediately.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              9. International Data Transfers
            </h2>
            <p className="text-gray-700">
              Although our primary operations are in Abu Dhabi, we may transfer data securely to
              service providers in other countries. We ensure adequate safeguards are applied.
            </p>
          </section>

          {/* 10. Updates to This Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Updates to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with a revised effective date.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or your data, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Hire In AbuDhabi</h3>
              <p className="flex items-center text-gray-700 mb-2">
                <Mail className="w-5 h-5 mr-2 text-gray-600" /> Hireinmarketing@gmail.com
              </p>
              <p className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-gray-600" />
                Plot 122, Ad Doja 1st St, M-40 Mussafah, Abu Dhabi, United Arab Emirates
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

export default PrivacyPolicy;
