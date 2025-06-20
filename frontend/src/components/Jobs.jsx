import React from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./Jobs_section/FilterCard";
import Job from "./Jobs_section/Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <div className="py-[100px]">
      <Navbar />

      <div className="container mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-1/5">
            <FilterCard />
          </div>
          {jobsArray.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((item, index) => (
                  <div>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
