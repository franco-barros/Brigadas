"use client";

import React from "react";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import { HowItStarted } from "../components/howitstarted";
import { ActivityLocations } from "../components/activitylocations";
import { ExternalActivities } from "../components/externalactivities";
import { FAQSection } from "../components/FAQsection";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutUs />
      <HowItStarted />

      <ActivityLocations />

      <ExternalActivities />

      <FAQSection />

      <Contact />
    </main>
  );
}
