import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import CodingPage from "./pages/CodingPage";
import MultimediaPage from "./pages/MultimediaPage";
import AboutUs from "./pages/AboutUs";
import TermsConditions from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col relative z-0">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/Digitalmarketing" element={<DigitalMarketingPage />} />
            <Route path="/Coding" element={<CodingPage />} />
            <Route path="/Multimedia" element={<MultimediaPage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <footer id="contact">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
