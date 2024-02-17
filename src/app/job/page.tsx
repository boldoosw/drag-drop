import JobCards from "@/components/Cards/JobCards";
import React from "react";

function JobPage() {
  return (
    <div className="flex flex-col gap-5  md:flex-row md:justify-between">
      <JobCards />
    </div>
  );
}

export default JobPage;
