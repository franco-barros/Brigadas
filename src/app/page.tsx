"use client";

import React from "react";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import { WhatWeDo } from "../components/whatwedo";
import { JoinSection } from "../components/joinsection";
import BrandsCarousel from "../components/brandscarousel";
import { WhereWeAre } from "../components/whereweare";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutUs />

      <WhatWeDo />

      <BrandsCarousel />

      <WhereWeAre />

      <JoinSection />

      <Contact />
    </main>
  );
}
