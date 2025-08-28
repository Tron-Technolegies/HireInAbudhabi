import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <WhatsAppButton />
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}
