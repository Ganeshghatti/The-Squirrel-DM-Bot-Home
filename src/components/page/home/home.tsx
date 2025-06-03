import React from "react";
import HeroSection from "./components/heroSection";
import ProductShowcase from "./components/productShowcase";
import TrustedCompanies from "./components/trustedCompanies";

import SmarterWorkflows from "./components/smarterWorkflows";
import QuickSteps from "./components/quickSteps";
import FeatureSection from "./components/featureSection";
import StatsSection from "./components/statsSection";
import UserAreSaying from "./components/userAreSaying";
import FAQPage from "./components/FAQPage";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";

function Home() {
  return (
    <main className="h-full min-h-dvh">
      <HeroSection />
      <ProductShowcase />
      <TrustedCompanies/>
      <FeatureSection/>
      <StatsSection/>
      <SmarterWorkflows/>
      <QuickSteps/>
      <UserAreSaying/>
      <FAQPage/>
      <Contact/>
      <CTASection/>
    </main>
  );
}

export default Home;
