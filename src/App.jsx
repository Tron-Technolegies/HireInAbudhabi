import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <WhatsAppButton />
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}
