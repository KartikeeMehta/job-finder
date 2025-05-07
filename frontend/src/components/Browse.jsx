import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Jobs_section/Job";

const randomJobs = [1, 2, 3, 4];

function Browse() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-[100px]">
        <h1 className="font-bold text-xl my-10">
          Search Results ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item, index) => {
            return <Job />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Browse;
