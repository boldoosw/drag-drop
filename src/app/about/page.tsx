import AboutCards from "@/components/Cards/Cards";
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col gap-5  md:flex-row md:justify-between">
      <AboutCards />
    </div>
  );
}

export default AboutPage;
