"use client";

import React from "react";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import { FAQSection } from "../components/FAQsection";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <FAQSection />
      <Contact />
    </main>
  );
}
