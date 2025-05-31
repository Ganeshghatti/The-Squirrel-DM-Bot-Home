import React from "react";
import Feedback from "./feedback";
import Trending from "./Trending";

function SmarterWorkflows() {
  return (
    <section id="features">
      <header className="text-center py-10 max-w-4xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
          Complete Tools for
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          Smarter Workflows
        </h1>
        <p className="text-base sm:text-lg text-[var(--neutral-400)] max-w-2xl mx-auto">
          Everything you need to create, launch, and grow
        </p>
      </header>
      <div>
        <Feedback />
        <Trending />
      </div>
    </section>
  );
}

export default SmarterWorkflows;
