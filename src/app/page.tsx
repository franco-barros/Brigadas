"use client";

import React from "react";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import { FAQSection } from "../components/FAQsection";
import { HowItStarted } from "../components/howitstarted";
import { ActivityLocations } from "../components/activitylocations";
import { Achievements } from "../components/achievements";
import { ExternalActivities } from "../components/externalactivities";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <HowItStarted />
      <ActivityLocations />
      <Achievements />
      <ExternalActivities />
      <FAQSection />
      <Contact />
    </main>
  );
}
